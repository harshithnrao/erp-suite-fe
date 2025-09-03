export class Invoice {
  id: number;
  orderId: number;
  orderName: string;
  status: string;
  invoiceDate: Date | null;
  taxAmount: number;
  totalAmount: number;
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
    this.orderId = json?.orderId || 0;
    this.orderName = json?.orderName || '';
    this.status = json?.status || 'Pending';
    this.invoiceDate = json?.invoiceDate ? new Date(json.invoiceDate) : null;
    this.taxAmount = json?.taxAmount || 0;
    this.totalAmount = json?.totalAmount || 0;
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
