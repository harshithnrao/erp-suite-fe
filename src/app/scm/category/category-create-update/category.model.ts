export class Category {
  id: number;
  name: string;
  code: string;
  description: string;
  validFrom: string;
  validTill: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  modifiedBy: string | null;
  deletedAt: string | null;
  version: number;

  constructor(json?: any) {
    this.id = json?.id || 0;
    this.name = json?.name || '';
    this.code = json?.code || '';
    this.description = json?.description || '';
    this.validFrom = json?.validFrom || '';
    this.validTill = json?.validTill || '';
    this.createdAt = json?.createdAt || '';
    this.updatedAt = json?.updatedAt || '';
    this.createdBy = json?.createdBy || '';
    this.modifiedBy = json?.modifiedBy || null;
    this.deletedAt = json?.deletedAt || null;
    this.version = json?.version || 1;
  }
}
