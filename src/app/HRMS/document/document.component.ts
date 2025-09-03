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
import { PermissionService } from "src/app/permission.service"; import { Document } from "./document-create-update/document.model";
import { DocumentCreateUpdateComponent } from "./document-create-update/document-create-update.component";
import { DocumentService } from "./document.service";

@Component({
  selector: 'fury-users-list',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss'],
  animations: [fadeInRightAnimation, fadeInUpAnimation]
})
export class DocumentComponent implements OnInit, AfterViewInit, OnDestroy {

  crumbs = [
    { label: 'HRMS', url: '/hrms' },
  ];

  subject$: ReplaySubject<Document[]> = new ReplaySubject<Document[]>(1);
  data$: Observable<Document[]> = this.subject$.asObservable();
  quotes: Document[];

  quoteResponseData: Document[] = [];

  @Input()
  columns: ListColumn[] = [
    { name: 'Checkbox', property: 'checkbox', visible: false },

    { name: 'ID', property: 'id', visible: true, isModelProperty: true },
    { name: 'Employee ID', property: 'employeeId', visible: true, isModelProperty: true },
    { name: 'Employee Name', property: 'employeeName', visible: false, isModelProperty: true },
    { name: 'Document Type', property: 'documentType', visible: false, isModelProperty: true },
    { name: 'Document Number', property: 'documentNumber', visible: true, isModelProperty: true },
    // { name: 'filePath', property: 'filePath', visible: true, isModelProperty: true },
    { name: 'Issue Date', property: 'issueDate', visible: true, isModelProperty: true },
    { name: 'Expiry Date', property: 'expiryDate', visible: true, isModelProperty: true },
    { name: 'Description', property: 'description', visible: true, isModelProperty: true },
    { name: 'Valid From', property: 'validFrom', visible: false, isModelProperty: true },
    { name: 'Valid Till', property: 'validTill', visible: false, isModelProperty: true },

    { name: 'Created At', property: 'createdAt', visible: false, isModelProperty: true },
    { name: 'Updated At', property: 'updatedAt', visible: false, isModelProperty: true },
    { name: 'Created By', property: 'createdBy', visible: false, isModelProperty: true },
    { name: 'Modified By', property: 'modifiedBy', visible: false, isModelProperty: true },
    { name: 'Deleted At', property: 'deletedAt', visible: false, isModelProperty: true },
    { name: 'Version', property: 'version', visible: false, isModelProperty: true },

    { name: 'Actions', property: 'actions', visible: true, isModelProperty: false }
  ] as ListColumn[];

  pageSize = 10;
  dataSource: MatTableDataSource<Document> | null;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  isLoaded: boolean = false;

  constructor(private dialog: MatDialog, private quoteService: DocumentService, private commonService: CommonService, protected permissionService: PermissionService) {
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
    const response: Document[] = await this.quoteService.getQuotes();
    this.isLoaded = true;
    of(response.map(quote => new Document(quote))).subscribe(quotes => {
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

  openFile(row: any): void {
    if (this.permissionService.hasPermission('Document', 'Open')) {

      const filePath = row.filePath;
      const url = `http://192.168.0.55:8081/documents/${filePath}`;
      window.open(url, '_blank'); 
      // // window.location.href=url; 
      // const link = document.createElement('a'); // Create a link element
      // link.href = url; // Set the file URL
      // link.download = filePath.split('/').pop(); // Set the filename for download
      // link.click();
    }
  }

  createQuote() {
    this.dialog.open(DocumentCreateUpdateComponent).afterClosed().subscribe(async (quote: Document) => {
      /**
       * Customer is the updated customer (if the user pressed Save - otherwise it's null)
       */
      if (quote) {
        const response = await this.quoteService.addQuote(quote);
        if (response && response.data && response.data.id) {
          this.quotes.unshift(new Document(quote));
          this.subject$.next(this.quotes);
          this.commonService.showNotifier('Quote created successfully', 'success', 3000);
        }
      }
    });
  }

  updateQuote(quote) {
    this.dialog.open(DocumentCreateUpdateComponent, {
      data: quote
    }).afterClosed().subscribe(async (quote) => {
      /**
       * Customer is the updated customer (if the user pressed Save - otherwise it's null)
       */
      if (quote) {
        const response = await this.quoteService.updateQuote(quote);
        if (response && response.data && response.data.id) {
          const index = this.quotes.findIndex((existingQuote) => existingQuote.id === quote.id);
          this.quotes[index] = new Document(quote);
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
