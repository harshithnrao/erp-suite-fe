export class AccountsReceivable {
  id: number;
  customerId: number;
  customerName: string;
  accountNumber: string;
  bankName: string;
  accountType: string;
  ifscCode: string;
  branch: string;
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
    this.customerId = json?.customerId || 0;
    this.customerName = json?.customerName || '';
    this.accountNumber = json?.accountNumber || '';
    this.bankName = json?.bankName || '';
    this.accountType = json?.accountType || '';
    this.ifscCode = json?.ifscCode || '';
    this.branch = json?.branch || '';
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
