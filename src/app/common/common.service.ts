
import { Injectable, Compiler, OnDestroy, Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Utility } from './Utility';
import * as moment from 'moment';
import { BehaviorSubject, forkJoin, Observable, of, Subject, throwError } from 'rxjs';
import { Validator, Validators } from '@angular/forms';
import { catchError, debounceTime, map, tap } from 'rxjs/operators';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import * as XLSX from 'xlsx';
import { EventTriggerModel, HttpRequestModel } from './common.model';
import { Subscription } from "rxjs";
import { saveAs } from 'file-saver';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
// declare var $: any;
@Injectable()
export class CommonService {
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  headers: any;
  searchTermSearched = new Subject();
  commonObservable: {
    [x: string]: BehaviorSubject<any>;
  } = {
      analysisGlobalCommunicator: new BehaviorSubject<EventTriggerModel>({} as EventTriggerModel),
      loggedInDetails: new BehaviorSubject<EventTriggerModel>({} as EventTriggerModel)
    };
  private _filteredResults = new BehaviorSubject<any>(null);

  constructor(
    private http: HttpClient,
    private _snackBar: MatSnackBar,
    // private oktaAuthService: OktaAuthService,
    private _complier: Compiler) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  }

  isAuthenticated() {
    return !!Utility.getLocalStorageItem('userDetails');
  }

  get httpClient() {
    return this.http;
  }

  updateFilteredResults(resultsSet: unknown) {
    this._filteredResults.next(resultsSet);
  }

  getFilteredResults(): Observable<any> {
    return this._filteredResults.asObservable();
  }

  responseHandler(res: any, requireFullResponse = false) {
    if (res.status === 302 || (res && typeof res === 'string' && res.indexOf('WSSO Login') > -1)) {
      // window.location.reload();
      this.windowRelaod();
      return;
    } else if (res.status === 304) {
      this.logout();
      return;
    } else {
      if (requireFullResponse) {
        return res;
      }
      const responseBody = res.body || null;
      return responseBody;
    }
  }
  windowRelaod() {
    window.location.reload();

  }

  getHttpPostMultiPartResponse(formData: unknown, url: string): Observable<any[]> {
    const body = formData;
    return this.http
      .post(url, body, { observe: 'response' }).pipe(
        map((res) => this.responseHandler(res)),
        catchError((error: any) => {
          throwError(new Error(error.status));
          this.responseHandler({ $error: error });
          return of(error.error);
        })
      );
  }

  getHttpPutMultiPartResponse(formData: unknown, url: string): Observable<any[]> {
    const body = formData;
    return this.http
      .put(url, body, { observe: 'response' }).pipe(
        map((res) => this.responseHandler(res)),
        catchError((error: any) => {
          throwError(new Error(error.status));
          this.responseHandler({ $error: error });
          return of(error.error);
        })
      );
  }

  getHttpPostResponse(request: unknown, url: string): Observable<any[]> {
    const body = request;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .post(url, body, { headers, observe: 'response' })
      .pipe(
        map((res) => this.responseHandler(res)),
        catchError((error: any) => {
          throwError(new Error(error.status));
          this.responseHandler({ $error: error });
          return of(error.error);
        })
      );
  }

  getHttpDeleteResponse(request: unknown, url: string): Observable<any[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .delete(url, { headers, observe: 'response' })
      .pipe(
        map((res) => this.responseHandler(res)),
        catchError((error: any) => {
          throwError(new Error(error.status));
          this.responseHandler({ $error: error });
          return of(error.error);
        })
      );
  }

  getHttpPutResponse(request: unknown, url: string): Observable<any[]> {
    const body = request;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .put(url, body, { headers, observe: 'response' })
      .pipe(
        map((res) => this.responseHandler(res)),
        catchError((error: any) => {
          throwError(new Error(error.status));
          this.responseHandler({ $error: error });
          return of(error.error);
        })
      );
  }

  getHttpGetResponse(url: string, request: any = null): Observable<any[] | HttpResponse<Object>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const params = new HttpParams();
    if (request) {
      // tslint:disable-next-line: forin
      for (const i in request) {
        params.set(i, request[i]);
      }
    }
    return this.http
      .get(url, { headers, params, observe: 'response' })
      .pipe(
        map((res) => this.responseHandler(res)),
        catchError((error: any) => {
          throwError(new Error(error.status));
          this.responseHandler({ $error: error });
          return of(error.error);
        })
      );
  }

  getHttpDownloadResponse(request: any, url: string, headers = {}, obj: any) {
    if (typeof obj !== 'object') {
      return;
    }
    const body = request;
    const httpOptions = {
      headers: new HttpHeaders({
        ...headers,
        observe: 'response'
      }),
      responseType: 'blob' as 'json'
    };
    let httpRequest;
    if (obj.type === 'get') {
      httpRequest = this.http.get(url, httpOptions);
    } else if (obj.type === 'post') {
      httpRequest = this.http.post(url, body, httpOptions);
    }
    if (httpRequest) {
      return httpRequest.pipe(
        map((res: any) => {
          this.responseHandler(res, true);
          if (res) {
            const element = document.createElement('a');
            if (obj.name) {
              let blob = res;
              if (!(res instanceof Blob)) {
                blob = new Blob([res], { type: res.type });
              }
              const fileUrl = window.URL.createObjectURL(blob);
              element.href = fileUrl;
              element.download = obj.name;
            } else {
              element.href = url;
            }
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
            return { status: 'Downloaded' };
          }
        }),
        catchError((error: any) => {
          this.showNotifier('DownloadFile_Error', 'error');
          throwError(new Error(error.status));
          return of(error.error);
        })
      );
    }
  }

  logout() {
    const request: HttpRequestModel = {
      url: Utility.urlParams.logout.url,
      param: {},
      type: Utility.urlParams.logout.type,
    }
    try {
      this.getAPIResponse(request);
      console.log('logout');
    }
    catch (e) {
      this._snackBar.open('Logout Error', 'error');
    }
    Utility.clearAllSessionStorageItems();
    this._complier.clearCache();
    
    window.location.href = Utility.fullOriginPath //Utility.urlParams.wssoLogoutUrl.url;
  }

  getAPIResponse(httpRequest: HttpRequestModel = {} as HttpRequestModel): Observable<any> {


    const httpLiteral: any = {
      'GET': (): Observable<any> => { return this.getHttpGetResponse(httpRequest.url, httpRequest.param) },
      'DELETE': (): Observable<any> => { return this.getHttpDeleteResponse(null, httpRequest.url); },
      'POST': (): Observable<any> => { return this.getHttpPostResponse(httpRequest.param, httpRequest.url); },
      'PUT': (): Observable<any> => { return this.getHttpPutResponse(httpRequest.param, httpRequest.url); },
      'MultiPart': (): Observable<any> => { return this.getHttpPostMultiPartResponse(httpRequest.param, httpRequest.url); },
      'MultiPart-PUT': (): Observable<any> => { return this.getHttpPutMultiPartResponse(httpRequest.param, httpRequest.url); },
      'Download': (): Observable<any> => {
        const response = this.getHttpDownloadResponse(httpRequest.param, httpRequest.url, httpRequest.headers, httpRequest.downloadObject) || of({} as any);;
        return response;
      },
    }

    try {
      if (!httpRequest.url) {
        throw new Error(`URL - ${httpRequest.url} Not Implemented`);
      }
      if (!httpLiteral[httpRequest.type]) {
        throw new Error(`Type - ${httpRequest.type} Not Implemented`);
      }
      if (httpRequest.type === 'GET' || httpRequest.type === 'DELETE') {
        let str = '';
        if (httpRequest.param) {
          // tslint:disable-next-line: forin
          for (const i in httpRequest.param) {
            if (str) {
              str += '&';
            } else {
              str += '?';
            }
            str += `${i}=${httpRequest.param[i]}`;
          }
        }
        httpRequest.url += str;
      }
      return httpLiteral[httpRequest.type]();
    } catch (err) {
      console.error(err);
      return of({ error: "Invalid Http" });
    } finally {

    }
  }

  newTab(url: string) {
    const pwa = window.open(url);
    if (!pwa || pwa.closed || typeof pwa.closed === 'undefined') {
      this.showNotifier('Please disable your Pop-up blocker and try again.', 'warning');
    }
  }
  getGenericForkJoin(requestArr: HttpRequestModel[]) {
    const responseArr: any = [];
    requestArr.map((request: HttpRequestModel) => {
      responseArr.push(this.getAPIResponse(request));
    });
    return forkJoin(responseArr);
  }

  formatDateTime(date: Date = new Date(), format: string = 'dd/mm/yyyy') {
    return moment(date).format(format);
  }

  getMomentDate(date: any) {
    return moment(date).format();
  }

  checkNullOrUndefined(value: any) {
    if (value == null || typeof value === 'undefined') {
      return true;
    }
    return false;
  }

  processForkJoin(responses: any, requests: HttpRequestModel[]): { [name: string]: any } {
    const processedObj: any = {};
    if (requests && responses) {
      requests.map((request, index) => {
        if (request.name) {
          processedObj[request.name] = responses[index];
        }
      });
    }
    return processedObj;
  }

  showNotifier(message: string, type: 'error' | 'warning' | 'info' | 'success' = 'info', timer: number = 3000) {
    let className = '';
    if (type === 'error') {
      className = 'notifi-danger';
    } else if (type === 'warning') {
      className = 'notifi-warning';
    } else if (type === 'info') {
      className = 'notifi-info';
    } else if (type === 'success') {
      className = 'notifi-success';
    }

    this._snackBar.open(message, 'X', {
      duration: timer,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: className
    });
  }

  formatDate(date: any) {
    // tslint:disable-next-line: prefer-const
    let d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      // tslint:disable-next-line: prefer-const
      year = d.getFullYear();

    if (month.length < 2) { month = '0' + month; }
    if (day.length < 2) { day = '0' + day; }

    return [year, month, day].join('-');
  }

  public exportAsExcelFile(json: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    saveAs(data, fileName + EXCEL_EXTENSION);
  }

  timeout(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  splitCustom(sentence: string, splitDelimiter: string, index = -1) {

  }

  getFile(serviceUrl: string, ispost: boolean, param: any): Observable<Blob> {  // To download the file received from API

    return (ispost ? this.http.post(serviceUrl, param, { responseType: 'blob' }) :
      this.http.get(serviceUrl, { responseType: 'blob' })).pipe(catchError((e) => throwError(e)),
        map(res => {
          return res;
        }),
      );
  }

  downloadExcelFile(requestURL: string, excelFileNam: string, ispost: boolean = false, param?: any): void {
    this.getFile(requestURL, ispost, param).subscribe(res => {
      const blob = new Blob([res], { type: 'application/vnd.ms.excel' });
      const file = new File([blob], excelFileNam + '.xlsx', { type: 'application/vnd.ms.excel' });
      saveAs(file);
    },
      HttpErrorResponse => {
        let msg = 'Received ' + HttpErrorResponse.status + ' error from API, Please try again.';
        if (HttpErrorResponse.url.includes('detailedCost/download'))
          msg = `1001 :: Data Not Found Exception`;
        this.showNotifier(msg, 'error');
      });
  }

  dlExcelFile(requestURL: string, ispost: boolean = false, param?: any): void {
    this.getExcelFile(requestURL, ispost, param).subscribe(async res => {
      const { data } = res;
      const blob = await fetch(`data:application/vnd.ms.excel;base64,${data.body}`).then(res => res.blob());
      const file = new File([blob], data ? data.headers['Content-Disposition'][0].split('=')[1] : `Summary-PandL.xlsx`, { type: 'application/vnd.ms.excel' });
      saveAs(file);
    },
      HttpErrorResponse => {
        const { message } = HttpErrorResponse.error.status ? HttpErrorResponse.error.status : HttpErrorResponse.error.error;
        let msg = message;
        if (HttpErrorResponse.url.includes('detailedCost/download'))
          msg = `1001 :: Data Not Found Exception`;
        this.showNotifier(message || 'Download excel file failed!', 'error');
      });
  }

  private getExcelFile(serviceUrl: string, ispost: boolean, param?: any): Observable<any> {  // To download the file received from API

    return (ispost ? this.http.post(serviceUrl, param) :
      this.http.get(serviceUrl))
      .pipe(
        map(res => {
          return res;
        }),
        catchError((e) => throwError(e))
      );
  }

}

@Component({ template: '' })
export class BaseComponent implements OnDestroy {
  ngUnsubscribe = new Subject<void>();

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
