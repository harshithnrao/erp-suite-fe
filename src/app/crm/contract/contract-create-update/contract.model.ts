export class Contract {
  id: number;
  customerId: number;
  customerName: string;
  title: string;
  totalAmount: number;
  contractDate: Date;
  status: string;
  details: string;
  validFrom: Date;
  validTill: Date;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  modifiedBy: string;
  deletedAt: Date | null;
  version: number;

  constructor(json?: any) {
    this.id = json.id || 0;
    this.customerId = json.customerId || 0;
    this.customerName = json.customerName || '';
    this.title = json.title || '';
    this.totalAmount = json.totalAmount || 0;
    this.contractDate = json.contractDate ? new Date(json.contractDate) : new Date();
    this.status = json.status || '';
    this.details = json.details || '';
    this.validFrom = json.validFrom ? new Date(json.validFrom) : new Date();
    this.validTill = json.validTill ? new Date(json.validTill) : new Date();
    this.createdAt = json.createdAt ? new Date(json.createdAt) : new Date();
    this.updatedAt = json.updatedAt ? new Date(json.updatedAt) : new Date();
    this.createdBy = json.createdBy || '';
    this.modifiedBy = json.modifiedBy || '';
    this.deletedAt = json.deletedAt ? new Date(json.deletedAt) : null;
    this.version = json.version || 1;
  }
}
