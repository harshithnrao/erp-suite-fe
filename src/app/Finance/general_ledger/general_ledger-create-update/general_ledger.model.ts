export class GeneralLedger {
  id: number;
  fromAccount: string;
  toAccount: string;
  order: string;
  transactionDate: string;
  totalAmount: number;
  pendingAmount: number;
  description: string;
  transactionType: string;
  format: string;
  validFrom: string;
  validTill: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  modifiedBy: string;
  deletedAt: string | null;
  version: number;

  constructor(json?: any) {
    this.id = json?.id || 0;
    this.fromAccount = json?.fromAccount || '';
    this.toAccount = json?.toAccount || '';
    this.order = json?.order || '';
    this.transactionDate = json?.transactionDate || '';
    this.totalAmount = json?.totalAmount || 0;
    this.pendingAmount = json?.pendingAmount || 0;
    this.description = json?.description || '';
    this.transactionType = json?.transactionType || '';
    this.format = json?.format || '';
    this.validFrom = json?.validFrom || '';
    this.validTill = json?.validTill || '';
    this.createdAt = json?.createdAt || '';
    this.updatedAt = json?.updatedAt || '';
    this.createdBy = json?.createdBy || '';
    this.modifiedBy = json?.modifiedBy || '';
    this.deletedAt = json?.deletedAt || null;
    this.version = json?.version || 1;
  }
}
