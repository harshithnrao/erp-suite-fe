import { Component, OnInit } from '@angular/core';
import { HrmsService, MenuItem } from './hrms.service';

@Component({
  selector: 'fury-hrms',
  templateUrl: './hrms.component.html',
  styleUrls: ['./hrms.component.scss']
})
export class HrmsComponent implements OnInit {
  menuItems: MenuItem[] = [];
  crumbs = [];
  private _gap = 16;
  gap = `${this._gap}px`;

  employeesCountRequest: any;
  todayAttendanceCountRequest: any;
  departmentsCountRequest: any;

  quickInfoCards: Array<{ color: string; icon: string; value: any; label: string; background: string; image: string }> = [];

  constructor(private hrmsService: HrmsService) {}

  async ngOnInit(): Promise<void> {
    (await this.hrmsService.getMenuItems()).subscribe(items => {
      this.menuItems = items;
    });
    this.getDashboardData();
  }

  async getDashboardData() {
    await this.hrmsService.getDashboardData();
    this.employeesCountRequest = this.hrmsService.screenModel.employeesCountRequest;
    this.todayAttendanceCountRequest = this.hrmsService.screenModel.todayAttendanceCountRequest;
    this.departmentsCountRequest = this.hrmsService.screenModel.departmentsCountRequest;

    this.initializeQuickInfoCards();
  }

  initializeQuickInfoCards() {
    this.quickInfoCards = [
      {
        color: 'white',
        icon: 'people',
        value: this.employeesCountRequest.totalEmployees,
        label: 'Total Employees',
        background: '#5fb1bf',
        image: '/assets/hrms/employees-icon-dash-hrms.png', // Employees
      },
      {
        color: 'white',
        icon: 'access_time',
        value: this.todayAttendanceCountRequest.todayAttendance,
        label: 'Today\'s Attendance',
        background: '#ccedf6',
        image: '/assets/hrms/attendance-hrms-dash.png', // Attendance
      },
      {
        color: 'white',
        icon: 'business',
        value: this.departmentsCountRequest.totalDepartments,
        label: 'Total Departments',
        background: '#ee7b44',
        image: '/assets/hrms/department-hrms-dash.png', // Departments
      }
    ];
  }
  

  col(colAmount: number) {
    return `1 1 calc(${100 / colAmount}% - ${this._gap - (this._gap / colAmount)}px)`;
  }
}
