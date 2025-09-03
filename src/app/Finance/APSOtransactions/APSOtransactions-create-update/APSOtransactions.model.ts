export class APSOTransactions {
  id: number;
  fromAccount: string;
  apAccountId: number;
  toAccount: string;
  serviceOrderId: number;
  transactionDate: Date | null;
  totalAmount: number;
  pendingAmount: number;
  description: string;
  transactionType: string;
  format: string;
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
    this.fromAccount = json?.fromAccount || '';
    this.apAccountId = json?.apAccountId || 0;
    this.toAccount = json?.toAccount || '';
    this.serviceOrderId = json?.serviceOrderId || 0;
    this.transactionDate = json?.transactionDate ? new Date(json.transactionDate) : null;
    this.totalAmount = json?.totalAmount || 0;
    this.pendingAmount = json?.pendingAmount || 0;
    this.description = json?.description || '';
    this.transactionType = json?.transactionType || '';
    this.format = json?.format || '';
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
