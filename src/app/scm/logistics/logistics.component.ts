import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { fadeInRightAnimation } from "src/@fury/animations/fade-in-right.animation";
import { fadeInUpAnimation } from "src/@fury/animations/fade-in-up.animation";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { ListColumn } from "src/@fury/shared/list/list-column.model";
import { Observable, ReplaySubject, filter, lastValueFrom, of } from "rxjs";
import { MatDialog } from "@angular/material/dialog";
import { CommonService } from "src/app/common/common.service";
import { PermissionService } from "src/app/permission.service";import { Logistics } from "./logistics-create-update/logistics.model";
import { LogisticsCreateUpdateComponent } from "./logistics-create-update/logistics-create-update.component";
import { LogisticsService } from "./logistics.service";

@Component({
  selector: 'fury-users-list',
  templateUrl: './logistics.component.html',
  styleUrls: ['./logistics.component.scss'],
  animations: [fadeInRightAnimation, fadeInUpAnimation]
})
export class LogisticsComponent implements OnInit, AfterViewInit, OnDestroy {

  crumbs = [
    { label: 'SCM', url: '/scm' },
  ];

  subject$: ReplaySubject<Logistics[]> = new ReplaySubject<Logistics[]>(1);
  data$: Observable<Logistics[]> = this.subject$.asObservable();
  quotes: Logistics[];

  quoteResponseData: Logistics[] = [];

  @Input()
  columns: ListColumn[] = [
    { name: 'Checkbox', property: 'checkbox', visible: false },
    { name: 'ID', property: 'id', visible: true, isModelProperty: true },
    { name: 'Vendor ID', property: 'vendorId', visible: true, isModelProperty: true },
    { name: 'Vendor Name', property: 'vendorName', visible: true, isModelProperty: true },
    { name: 'Distribution Center ID', property: 'distributionCenterId', visible: true, isModelProperty: true },
    { name: 'Distribution Center Name', property: 'distributionCenterName', visible: true, isModelProperty: true },
    { name: 'Item Code', property: 'itemCode', visible: true, isModelProperty: true },
    { name: 'From Location', property: 'fromLocation', visible: true, isModelProperty: true },
    { name: 'Price', property: 'price', visible: true, isModelProperty: true },
    { name: 'Valid From', property: 'validFrom', visible: false, isModelProperty: true },
    { name: 'Valid Till', property: 'validTill', visible: false, isModelProperty: true },
    { name: 'Created At', property: 'createdAt', visible: false, isModelProperty: true },
    { name: 'Updated At', property: 'updatedAt', visible: false, isModelProperty: true },
    { name: 'Deleted At', property: 'deletedAt', visible: false, isModelProperty: true },
    { name: 'Created By', property: 'createdBy', visible: false, isModelProperty: true },
    { name: 'Modified By', property: 'modifiedBy', visible: false, isModelProperty: true },
    { name: 'Actions', property: 'actions', visible: true, isModelProperty: false }
  ] as ListColumn[];
  
  pageSize = 10;
  dataSource: MatTableDataSource<Logistics> | null;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  isLoaded: boolean = false;

  constructor(private dialog: MatDialog, private quoteService: LogisticsService, private commonService: CommonService,protected permissionService: PermissionService) {
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
    const response: Logistics[] = await this.quoteService.getQuotes();
    this.isLoaded = true;
    of(response.map(quote => new Logistics(quote))).subscribe(quotes => {
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
    this.dialog.open(LogisticsCreateUpdateComponent).afterClosed().subscribe(async (quote: Logistics) => {
      /**
       * Customer is the updated customer (if the user pressed Save - otherwise it's null)
       */
      if (quote) {
        const response = await this.quoteService.addQuote(quote);
        if (response && response.data && response.data.id) {
          this.quotes.unshift(new Logistics(quote));
          this.subject$.next(this.quotes);
          this.commonService.showNotifier('Quote created successfully', 'success', 3000);
        }
      }
    });
  }

  updateQuote(quote) {
    this.dialog.open(LogisticsCreateUpdateComponent, {
      data: quote
    }).afterClosed().subscribe(async (quote) => {
      /**
       * Customer is the updated customer (if the user pressed Save - otherwise it's null)
       */
      if (quote) {
        const response = await this.quoteService.updateQuote(quote);
        if (response && response.data && response.data.id) {
          const index = this.quotes.findIndex((existingQuote) => existingQuote.id === quote.id);
          this.quotes[index] = new Logistics(quote);
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
      const response = await this.quoteService.deleteQuotes(quote);
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
