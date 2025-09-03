export class DistributionCenter {
  id: number;
  name: string;
  location: string;
  code: string;
  capacity: number;
  validFrom: string | null;
  validTill: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  createdBy: string;
  modifiedBy: string;
  deletedAt: string | null;
  version: number;

  constructor(json?: any) {
    this.id = json?.id || 0;
    this.name = json?.name || '';
    this.location = json?.location || '';
    this.code = json?.code || '';
    this.capacity = json?.capacity || 0;
    this.validFrom = json?.validFrom || null;
    this.validTill = json?.validTill || null;
    this.createdAt = json?.createdAt || null;
    this.updatedAt = json?.updatedAt || null;
    this.createdBy = json?.createdBy || '';
    this.modifiedBy = json?.modifiedBy || '';
    this.deletedAt = json?.deletedAt || null;
    this.version = json?.version || 1;
  }
}
