import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpRequestModel } from '../common/common.model';
import { Utility } from '../common/Utility';
import { CommonService } from '../common/common.service';
import { PermissionService } from '../permission.service';

export interface MenuItem {
  name: string;
  routeOrFunction: string;
  icon: string;
  badge: string;
  badgeColor: string;
  position: number;
  roles: string[];
}

@Injectable({
  providedIn: 'root'
})
export class HrmsService {
  screenModel: any = {}

  constructor(private http: HttpClient, private commonService: CommonService,protected permissionService: PermissionService) {
  }
  private jsonUrl = 'assets/hrms/menu-items.hrms.json';//src\assets\hrms\menu-items.hrms.json

  // getMenuItems(): Observable<MenuItem[]> {
  //   return this.http.get<{ 'menu-items': MenuItem[] }>(this.jsonUrl).pipe(
  //     map(data => data['menu-items'])
  //   );
  // }
  getMenuItems(): Observable<MenuItem[]> {
    return this.http.get<{ 'menu-items': MenuItem[] }>(this.jsonUrl).pipe(
      map(data => data['menu-items'].filter(menuItem => this.permissionService.hasPermission(menuItem.name,'Read')))
    );
  }
  async getDashboardData() {
    const employeesCountRequest = {
      url: Utility.urlParams.getEmployeesCount.url,
      param: {},
      type: Utility.urlParams.getEmployeesCount.type
    }
    const todayAttendanceCountRequest = {
      url: Utility.urlParams.getTodayAttendanceCount.url,
      param: {},
      type: Utility.urlParams.getTodayAttendanceCount.type
    }
    const departmentsCountRequest = {
      url: Utility.urlParams.getDepartmentsCount.url,
      param: {},
      type: Utility.urlParams.getDepartmentsCount.type
    }
    const reqArr: HttpRequestModel[] = [employeesCountRequest, todayAttendanceCountRequest,departmentsCountRequest];
    const responses = await lastValueFrom(this.commonService.getGenericForkJoin(reqArr));
    if (responses) {
      this.screenModel.employeesCountRequest = responses[0];;
      this.screenModel.todayAttendanceCountRequest = responses[1];;
      this.screenModel.departmentsCountRequest = responses[2];;
    }
    return responses;
  }
}