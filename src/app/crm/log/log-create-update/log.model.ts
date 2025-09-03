export class Log {
  id: number;
  employeeId: number;
  employeeName: string;
  title: string;
  task: string;
  description: string;
  validFrom: string;
  validTill: string | null;
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
    this.title = json.title || '';
    this.task = json.task || '';
    this.description = json.description || '';
    this.validFrom = json.validFrom || '';
    this.validTill = json.validTill || null;
    this.createdAt = json.createdAt || '';
    this.updatedAt = json.updatedAt || '';
    this.createdBy = json.createdBy || '';
    this.modifiedBy = json.modifiedBy || '';
    this.deletedAt = json.deletedAt || null;
    this.version = json.version || 1;
  }
}
