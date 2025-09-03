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
import { PermissionService } from "src/app/permission.service";import { Feedback } from "./feedback-create-update/feedback.model";
import { FeedbackCreateUpdateComponent } from "./feedback-create-update/feedback-create-update.component";
import { FeedbackService } from "./feedback.service";

@Component({
  selector: 'fury-users-list',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
  animations: [fadeInRightAnimation, fadeInUpAnimation]
})
export class FeedbackComponent implements OnInit, AfterViewInit, OnDestroy {

  crumbs = [
    { label: 'CRM', url: '/crm' },
  ];

  subject$: ReplaySubject<Feedback[]> = new ReplaySubject<Feedback[]>(1);
  data$: Observable<Feedback[]> = this.subject$.asObservable();
  quotes: Feedback[];

  quoteResponseData: Feedback[] = [];

  @Input()
  columns: ListColumn[] = [
    { name: 'Checkbox', property: 'checkbox', visible: false, isModelProperty: false },
    { name: 'ID', property: 'id', visible: true, isModelProperty: true },
    { name: 'Lead ID', property: 'leadId', visible: true, isModelProperty: true },
    { name: 'Lead Name', property: 'leadName', visible: true, isModelProperty: true },
    { name: 'Rating', property: 'rating', visible: true, isModelProperty: true },
    { name: 'Comment', property: 'comment', visible: true, isModelProperty: true },
    { name: 'Valid From', property: 'validFrom', visible: false, isModelProperty: true },
    { name: 'Valid Till', property: 'validTill', visible: false, isModelProperty: true },
    { name: 'Created At', property: 'createdAt', visible: false, isModelProperty: true },
    { name: 'Updated At', property: 'updatedAt', visible: false, isModelProperty: true },
    { name: 'Deleted At', property: 'deletedAt', visible: false, isModelProperty: true },
    { name: 'Version', property: 'version', visible: false, isModelProperty: true },
    { name: 'Created By', property: 'createdBy', visible: false, isModelProperty: true },
    { name: 'Modified By', property: 'modifiedBy', visible: false, isModelProperty: true },
    { name: 'Actions', property: 'actions', visible: true, isModelProperty: false },
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<Feedback> | null;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  isLoaded: boolean = false;

  constructor(private dialog: MatDialog, private quoteService: FeedbackService, private commonService: CommonService,protected permissionService: PermissionService) {
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
    const response: Feedback[] = await this.quoteService.getQuotes();
    this.isLoaded = true;
    of(response.map(quote => new Feedback(quote))).subscribe(quotes => {
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
    this.dialog.open(FeedbackCreateUpdateComponent).afterClosed().subscribe(async (quote: Feedback) => {
      /**
       * Customer is the updated customer (if the user pressed Save - otherwise it's null)
       */
      if (quote) {
        const response = await this.quoteService.addQuote(quote);
        if (response && response.data && response.data.id) {
          this.quotes.unshift(new Feedback(quote));
          this.subject$.next(this.quotes);
          this.commonService.showNotifier('Quote created successfully', 'success', 3000);
        }
      }
    });
  }

  updateQuote(quote) {
    this.dialog.open(FeedbackCreateUpdateComponent, {
      data: quote
    }).afterClosed().subscribe(async (quote) => {
      /**
       * Customer is the updated customer (if the user pressed Save - otherwise it's null)
       */
      if (quote) {
        const response = await this.quoteService.updateQuote(quote);
        if (response && response.data && response.data.id) {
          const index = this.quotes.findIndex((existingQuote) => existingQuote.id === quote.id);
          this.quotes[index] = new Feedback(quote);
          this.subject$.next(this.quotes);
          this.commonService.showNotifier('Quote updated successfully', 'success', 3000);
        }

      }
    });
  }

  async deleteQuote(quote) {
    if (quote) {
      const response = await this.quoteService.deleteQuotes(quote);
      // if (response) {
      //   const index = this.quotes.findIndex((existingQuote) => existingQuote.id === quote.id);
      //   this.quotes[index] = new Feedback(quote);
      //   this.subject$.next(this.quotes);
      //   this.commonService.showNotifier('Quote updated successfully', 'success', 3000);
      // }

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
