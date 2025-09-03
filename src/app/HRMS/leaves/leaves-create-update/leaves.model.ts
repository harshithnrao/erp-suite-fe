export class Leaves {
  id: number;
  employeeId: number;
  leaveTypeId: number;
  startDate: Date;
  endDate: Date;
  description: string;
  status: string;
  validFrom: Date;
  validTill: Date;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  modifiedBy: string;
  deletedAt: Date | null;
  version: number;
  employeeName: string;

  constructor(json?: any) {
    this.id = json.id || 0;
    this.employeeId = json.employeeId || 0;
    this.employeeName = json.employeeName || '';
    this.leaveTypeId = json.leaveTypeId || 0;
    this.startDate = json.startDate ? new Date(json.startDate) : new Date();
    this.endDate = json.endDate ? new Date(json.endDate) : new Date();
    this.description = json.description || '';
    this.status = json.status || 'Pending';
    this.validFrom = json.validFrom ? new Date(json.validFrom) : new Date();
    this.validTill = json.validTill ? new Date(json.validTill) : new Date();
    this.createdAt = json.createdAt ? new Date(json.createdAt) : new Date();
    this.updatedAt = json.updatedAt ? new Date(json.updatedAt) : new Date();
    this.createdBy = json.createdBy || 'admin';
    this.modifiedBy = json.modifiedBy || 'admin';
    this.deletedAt = json.deletedAt ? new Date(json.deletedAt) : null;
    this.version = json.version || 1;
  }
}
