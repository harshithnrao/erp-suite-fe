export class Zone {
  id: number;
  name: string;
  code: string;
  pincode: string;
  city: string;
  validFrom: string | null;
  validTill: string | null;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  modifiedBy: string;
  deletedAt: string | null;
  version: number;

  constructor(json?: any) {
    this.id = json?.id || 0;
    this.name = json?.name || '';
    this.code = json?.code || '';
    this.pincode = json?.pincode || '';
    this.city = json?.city || '';
    this.validFrom = json?.validFrom || null;
    this.validTill = json?.validTill || null;
    this.createdAt = json?.createdAt || '';
    this.updatedAt = json?.updatedAt || '';
    this.createdBy = json?.createdBy || '';
    this.modifiedBy = json?.modifiedBy || '';
    this.deletedAt = json?.deletedAt || null;
    this.version = json?.version || 0;
  }
}
