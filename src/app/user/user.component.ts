import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { fadeInRightAnimation } from "src/@fury/animations/fade-in-right.animation";
import { fadeInUpAnimation } from "src/@fury/animations/fade-in-up.animation";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { ListColumn } from "src/@fury/shared/list/list-column.model";
import { Observable, ReplaySubject, filter, lastValueFrom, of } from "rxjs";
import { MatDialog } from "@angular/material/dialog";
import { CommonService } from "../common/common.service";
import { Inventory } from "./user-create-update/user.model";
import { UserCreateUpdateComponent } from "./user-create-update/user-create-update.component";
import { UserService } from "./user.service";

@Component({
  selector: 'fury-users-list',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  animations: [fadeInRightAnimation, fadeInUpAnimation]
})
export class UserComponent implements OnInit, AfterViewInit, OnDestroy {

  subject$: ReplaySubject<Inventory[]> = new ReplaySubject<Inventory[]>(1);
  data$: Observable<Inventory[]> = this.subject$.asObservable();
  quotes: Inventory[];

  quoteResponseData: Inventory[] = [];

  @Input()
  columns: ListColumn[] = [
    { name: 'Checkbox', property: 'checkbox', visible: false },
    { name: 'Inventory#', property: 'id', visible: true, isModelProperty: true },
    { name: 'Farmer#', property: 'farmer_id', visible: false, isModelProperty: true },
    { name: 'Item#', property: 'item_id', visible: false, isModelProperty: true },
    { name: 'Item Name', property: 'item_name', visible: true, isModelProperty: true },
    { name: 'Farmer Name', property: 'farmer_name', visible: true, isModelProperty: true },
    { name: 'Weight', property: 'weight', visible: false, isModelProperty: true },
    { name: 'Remaining Weight', property: 'remaining_weight', visible: true, isModelProperty: true },
    { name: 'Rate per kg', property: 'final_rate_per_kg', visible: true, isModelProperty: true },
    { name: 'Name', property: 'name', visible: true, isModelProperty: true },
    { name: 'Actions', property: 'actions', visible: true },
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<Inventory> | null;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  isLoaded: boolean = false;

  constructor(private dialog: MatDialog, private quoteService: UserService, private commonService: CommonService,protected permissionService: PermissionService) {
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  /**
   * Example on how to get data and pass it to the table - usually you would want a dedicated service with a HTTP request for this
   * We are simulating this request here.
   */
  async getData() {
    this.isLoaded = false;
    const response: Inventory[] = await this.quoteService.getQuotes();
    this.isLoaded = true;
    of(response.map(quote => new Inventory(quote))).subscribe(quotes => {
      this.subject$.next(quotes);
    });
    this.dataSource = new MatTableDataSource();

    this.data$.pipe(
      filter(data => !!data)
    ).subscribe((quotes) => {
      this.quotes = quotes;
      this.dataSource.data = quotes;
    });
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.getData();
  }

  ngAfterViewInit() {

  }

  createQuote() {
    this.dialog.open(UserCreateUpdateComponent).afterClosed().subscribe(async (quote: Inventory) => {
      /**
       * Customer is the updated customer (if the user pressed Save - otherwise it's null)
       */
      if (quote) {
        const response = await this.quoteService.addQuote(quote);
        if (response && response.data && response.data.id) {
          this.quotes.unshift(new Inventory(quote));
          this.subject$.next(this.quotes);
          this.commonService.showNotifier('Quote created successfully', 'success', 3000);
        }
      }
    });
  }

  updateQuote(quote) {
    this.dialog.open(UserCreateUpdateComponent, {
      data: quote
    }).afterClosed().subscribe(async (quote) => {
      /**
       * Customer is the updated customer (if the user pressed Save - otherwise it's null)
       */
      if (quote) {
        const response = await this.quoteService.updateQuote(quote);
        if (response && response.data && response.data.id) {
          const index = this.quotes.findIndex((existingQuote) => existingQuote.id === quote.id);
          this.quotes[index] = new Inventory(quote);
          this.subject$.next(this.quotes);
          this.commonService.showNotifier('Quote updated successfully', 'success', 3000);
        }

      }
    });
  }

  async deleteQuote(quote) {
    /**
     * Here we are updating our local array.
     * You would probably make an HTTP request here.
     */if (quote) {
      const response = await this.quoteService.updateQuote(quote);
    }
    this.quotes.splice(this.quotes.findIndex((existingQuote) => existingQuote.id === quote.id), 1);
    this.subject$.next(this.quotes);
  }

  onFilterChange(value) {
    if (!this.dataSource) {
      return;
    }
    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
  }

  ngOnDestroy() {
  }
}
