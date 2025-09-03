import { Injectable } from "@angular/core";
// import { CommonService } from ".pp/common/common.service.ts";
import { CommonService } from "src/app/common/common.service";
import { PermissionService } from "src/app/permission.service";import { Utility } from "src/app/common/Utility";
import { lastValueFrom } from "rxjs";
import { HttpRequestModel } from "src/app/common/common.model";
import { Attendance } from "./attendance-create-update/attendance.model";

@Injectable()
export class AttendanceService {

  constructor(private commonService: CommonService,protected permissionService: PermissionService) { }


  async addQuote(quote: Attendance) {
    delete quote.id;
    const request: HttpRequestModel = {
      url: Utility.urlParams.addAttendance.url,
      param: quote,
      type: Utility.urlParams.addAttendance.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async updateQuote(quote: Attendance) {
    const request: HttpRequestModel = {
      url: Utility.urlParams.updateAttendance.url.replace("{id}", quote.id.toString()),
      param: quote,
      type: Utility.urlParams.updateAttendance.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async getQuotes(): Promise<Attendance[]> {
    const request = {
      url: Utility.urlParams.getAttendance.url,
      param: {},
      type: Utility.urlParams.getAttendance.type
    }
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    if (response) {

      return response as Attendance[];
    }
    return [] as Attendance[];;
  }
  async deleteQuotes(quote: Attendance ): Promise<Attendance[]> {
    const request = {
      url: Utility.urlParams.updateAttendance.url.replace("{id}", quote.id.toString()),

      type: 'DELETE'
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }
}
