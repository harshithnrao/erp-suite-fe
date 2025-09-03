export class PO {
  id: number;
  itemCode: string;
  itemCount: number;
  vendorId: number;
  vendorName: string;
  orderDate: string;
  rate: number;
  description: string;
  status: string;
  validFrom: string;
  validTill: string | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  version: number;
  createdBy: string;
  modifiedBy: string;

  constructor(json?: any) {
    this.id = json.id || 0;
    this.itemCode = json.itemCode || '';
    this.itemCount = json.itemCount || 0;
    this.vendorId = json.vendorId || 0;
    this.vendorName = json.vendorName || '';
    this.orderDate = json.orderDate || '';
    this.rate = json.rate || 0;
    this.description = json.description || '';
    this.status = json.status || '';
    this.validFrom = json.validFrom || '';
    this.validTill = json.validTill || null;
    this.createdAt = json.createdAt || '';
    this.updatedAt = json.updatedAt || '';
    this.deletedAt = json.deletedAt || null;
    this.version = json.version || 1;
    this.createdBy = json.createdBy || '';
    this.modifiedBy = json.modifiedBy || '';
  }
}
