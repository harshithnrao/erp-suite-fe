export class Item {
  id: number;
  categoryCode: string;
  categoryName: string;
  name: string;
  code: string;
  description: string;
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
    this.categoryCode = json.categoryCode || '';
    this.categoryName = json.categoryName || '';
    this.name = json.name || '';
    this.code = json.code || '';
    this.description = json.description || '';
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
