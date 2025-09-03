export class Order {
  id: number;
  orderDate: Date | null;
  customerId: number;
  customerName: string;
  proposedAmount: number;
  item: string;
  itemCount: string;
  validFrom: Date | null;
  validTill: Date | null;
  createdAt: Date | null;
  updatedAt: Date | null;
  deletedAt: Date | null;
  createdBy: string;
  modifiedBy: string;
  version: number;

  constructor(json?: any) {
    this.id = json?.id || 0;
    this.orderDate = json?.orderDate ? new Date(json.orderDate) : null;
    this.customerId = json?.customerId || 0;
    this.customerName = json?.customerName || '';
    this.proposedAmount = json?.proposedAmount || 0;
    this.item = json?.item || '';
    this.itemCount = json?.itemCount || '';
    this.validFrom = json?.validFrom ? new Date(json.validFrom) : null;
    this.validTill = json?.validTill ? new Date(json.validTill) : null;
    this.createdAt = json?.createdAt ? new Date(json.createdAt) : null;
    this.updatedAt = json?.updatedAt ? new Date(json.updatedAt) : null;
    this.deletedAt = json?.deletedAt ? new Date(json.deletedAt) : null;
    this.createdBy = json?.createdBy || '';
    this.modifiedBy = json?.modifiedBy || '';
    this.version = json?.version || 1;
  }
}
