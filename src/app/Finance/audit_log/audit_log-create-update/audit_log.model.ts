export class AuditLog {
  id: number;
  auditDate: Date | null;
  auditType: string;
  employeeId: number;
  employeeName: string;
  fromAccount: string;
  toAccount: string;
  outcome: string;
  remarks: string;
  validFrom: Date | null;
  validTill: Date | null;
  createdAt: Date | null;
  updatedAt: Date | null;
  createdBy: string;
  modifiedBy: string;
  deletedAt: Date | null;
  version: number;

  constructor(json?: any) {
    this.id = json?.id || 0;
    this.auditDate = json?.auditDate ? new Date(json.auditDate) : null;
    this.auditType = json?.auditType || '';
    this.employeeId = json?.employeeId || 0;
    this.employeeName = json?.employeeName || '';
    this.fromAccount = json?.fromAccount || '';
    this.toAccount = json?.toAccount || '';
    this.outcome = json?.outcome || '';
    this.remarks = json?.remarks || '';
    this.validFrom = json?.validFrom ? new Date(json.validFrom) : null;
    this.validTill = json?.validTill ? new Date(json.validTill) : null;
    this.createdAt = json?.createdAt ? new Date(json.createdAt) : null;
    this.updatedAt = json?.updatedAt ? new Date(json.updatedAt) : null;
    this.createdBy = json?.createdBy || '';
    this.modifiedBy = json?.modifiedBy || '';
    this.deletedAt = json?.deletedAt ? new Date(json.deletedAt) : null;
    this.version = json?.version || 1;
  }
}
