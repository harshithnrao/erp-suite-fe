export class Logistics {
  id: number;
  vendorId: number;
  vendorName: string;
  distributionCenterId: number;
  distributionCenterName: string;
  itemCode: string;
  fromLocation: string;
  price: number;
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
    this.vendorId = json.vendorId || 0;
    this.vendorName = json.vendorName || '';
    this.distributionCenterId = json.distributionCenterId || 0;
    this.distributionCenterName = json.distributionCenterName || '';
    this.itemCode = json.itemCode || '';
    this.fromLocation = json.fromLocation || '';
    this.price = json.price || 0;
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
