export class Ratesheet {
  id: number;
  itemCode: string;
  zoneCode: string;
  price: number;
  customerId: number;
  customerName: string;
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
    this.itemCode = json.itemCode || '';
    this.zoneCode = json.zoneCode || '';
    this.price = json.price || 0;
    this.customerId = json.customerId || 0;
    this.customerName = json.customerName || '';
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
