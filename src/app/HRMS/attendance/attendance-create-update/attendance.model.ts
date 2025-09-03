export class Attendance {
  id: number;
  employeeId: number;
  employeeName: string;
  attendanceDate: string;
  status: string;
  inTime: string;
  outTime: string;
  location: string;
  validFrom: string;
  validTill: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  modifiedBy: string;
  deletedAt: string | null;
  version: number;

  constructor(json?: any) {
    this.id = json.id || 0;
    this.employeeId = json.employeeId || 0;
    this.employeeName = json.employeeName || '';
    this.attendanceDate = json.attendanceDate || '';
    this.status = json.status || '';
    this.inTime = json.inTime || '';
    this.outTime = json.outTime || '';
    this.location = json.location || '';
    this.validFrom = json.validFrom || '';
    this.validTill = json.validTill || '';
    this.createdAt = json.createdAt || '';
    this.updatedAt = json.updatedAt || '';
    this.createdBy = json.createdBy || '';
    this.modifiedBy = json.modifiedBy || '';
    this.deletedAt = json.deletedAt || null;
    this.version = json.version || 1;
  }
}
