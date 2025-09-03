export class Payroll {
  id: number;
  employeeId: number;
  payDate: string;
  grossPay: number;
  netPay: number;
  deductions: number;
  validFrom: string;
  validTill: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  modifiedBy: string;
  deletedAt: string | null;
  version: number;
  employeeName: string;

  constructor(json?: any) {
    this.id = json.id || 0;
    this.employeeId = json.employeeId || 0;
    this.employeeName = json.employeeName || '';
    this.payDate = json.payDate || '';
    this.grossPay = json.grossPay || 0;
    this.netPay = json.netPay || 0;
    this.deductions = json.deductions || 0;
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
