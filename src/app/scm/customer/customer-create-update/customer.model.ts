export class Customer {
  id: number;
  name: string;
  contactInfo: string;
  location: string;
  pincode: string;
  validFrom: string;
  validTill: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  modifiedBy: string;
  deletedAt: string | null;
  version: number;

  constructor(json?: any) {
    this.id = json.id || 0;
    this.name = json.name || '';
    this.contactInfo = json.contactInfo || '';
    this.location = json.location || '';
    this.pincode = json.pincode || '';
    this.validFrom = json.validFrom || '';
    this.validTill = json.validTill || '';
    this.createdAt = json.createdAt || '';
    this.updatedAt = json.updatedAt || '';
    this.createdBy = json.createdBy || '';
    this.modifiedBy = json.modifiedBy || '';
    this.deletedAt = json.deletedAt || null;
    this.version = json.version || 1;
  }
}
