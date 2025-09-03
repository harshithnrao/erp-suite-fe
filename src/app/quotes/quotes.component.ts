import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { fadeInRightAnimation } from "src/@fury/animations/fade-in-right.animation";
import { fadeInUpAnimation } from "src/@fury/animations/fade-in-up.animation";
import { Order } from "./quotes-create-update/quotes.model";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { ListColumn } from "src/@fury/shared/list/list-column.model";
import { CustomerCreateUpdateComponent } from "../pages/tables/all-in-one-table/customer-create-update/customer-create-update.component";
import { Observable, ReplaySubject, filter, lastValueFrom, of } from "rxjs";
import { MatDialog } from "@angular/material/dialog";
import { QuotesService } from "./quotes.service";
import { QuoteCreateUpdateComponent } from "./quotes-create-update/quotes-create-update.component";
import { CommonService } from "../common/common.service";

@Component({
  selector: 'fury-quotes-list',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss'],
  animations: [fadeInRightAnimation, fadeInUpAnimation]
})
export class QuotesComponent implements OnInit, AfterViewInit, OnDestroy {

  subject$: ReplaySubject<Order[]> = new ReplaySubject<Order[]>(1);
  data$: Observable<Order[]> = this.subject$.asObservable();
  quotes: Order[];

  quoteResponseData: Order[] = [];

  @Input()
  columns: ListColumn[] = [
    { name: 'Checkbox', property: 'checkbox', visible: false },
    { name: 'Order#', property: 'id', visible: true, isModelProperty: true },
    { name: 'Inventory#', property: 'inventory_id', visible: false, isModelProperty: true },
    { name: 'Farmer#', property: 'farmer_id', visible: false, isModelProperty: true },
    { name: 'Buyer#', property: 'buyer_id', visible: false, isModelProperty: true },
    { name: 'Items#', property: 'items_id', visible: false, isModelProperty: true },
    { name: 'Buyer', property: 'buyer_name', visible: true, isModelProperty: true },
    { name: 'Farmer', property: 'farmer_name', visible: true, isModelProperty: true },
    { name: 'Inventory', property: 'inventory_name', visible: false, isModelProperty: true },
    { name: 'Item', property: 'item_name', visible: false, isModelProperty: true },
    { name: 'Weight', property: 'weight', visible: true, isModelProperty: true },
    { name: 'Ordered Date', property: 'ordered_date', visible: true, isModelProperty: true },
    { name: 'Delivery Date', property: 'est_delivery_date', visible: true, isModelProperty: true },
    { name: 'Order Amount', property: 'order_amount', visible: false, isModelProperty: true },
    { name: 'Discount', property: 'discount_applied', visible: false, isModelProperty: true },
    { name: 'Pending Amount', property: 'amount_pending', visible: true, isModelProperty: true },
    { name: 'Final Amount', property: 'final_amount', visible: true, isModelProperty: true },
    { name: 'Status', property: 'status', visible: true, isModelProperty: true },
    { name: 'Actions', property: 'actions', visible: true },
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<Order> | null;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  isLoaded: boolean = false;

  constructor(private dialog: MatDialog, private quoteService: QuotesService, private commonService: CommonService,protected permissionService: PermissionService) {
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
    const response: Order[] = await this.quoteService.getQuotes();
    this.isLoaded = true;
    of(response.map(quote => new Order(quote))).subscribe(quotes => {
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
    this.dialog.open(QuoteCreateUpdateComponent).afterClosed().subscribe(async (quote: Order) => {
      /**
       * Customer is the updated customer (if the user pressed Save - otherwise it's null)
       */
      if (quote) {
        const response = await this.quoteService.addQuote(quote);
        if (response && response.data && response.data.id) {
          this.quotes.unshift(new Order(quote));
          this.subject$.next(this.quotes);
          this.commonService.showNotifier('Quote created successfully', 'success', 3000);
        }
      }
    });
  }

  updateQuote(quote) {
    this.dialog.open(QuoteCreateUpdateComponent, {
      data: quote
    }).afterClosed().subscribe(async (quote) => {
      /**
       * Customer is the updated customer (if the user pressed Save - otherwise it's null)
       */
      if (quote) {
        const response = await this.quoteService.updateQuote(quote);
        if (response && response.data && response.data.id) {
          const index = this.quotes.findIndex((existingQuote) => existingQuote.id === quote.id);
          this.quotes[index] = new Order(quote);
          this.subject$.next(this.quotes);
          this.commonService.showNotifier('Quote updated successfully', 'success', 3000);
        }

      }
    });
  }

  async deleteQuote(quote) {
    const response = await this.quoteService.deleteQuote(quote);
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
