export class Vendor {
  id: number;
  name: string;
  pointOfContact: string;
  contactInfo: string;
  location: string;
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
    this.name = json.name || '';
    this.pointOfContact = json.pointOfContact || '';
    this.contactInfo = json.contactInfo || '';
    this.location = json.location || '';
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
