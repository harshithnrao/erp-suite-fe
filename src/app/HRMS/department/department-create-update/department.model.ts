export class Department {
  id: number;
  name: string;
  departmentHead: string;
  establishedDate: string;
  description: string;
  accountHead: string;
  status: string;
  validFrom: string;
  validTill: string | null;
  createdAt: string;
  updatedAt: string | null;
  createdBy: string;
  modifiedBy: string | null;
  deletedAt: string | null;
  version: number;

  constructor(json?: any) {
    this.id = json.id || 0;
    this.name = json.name || '';
    this.departmentHead = json.departmentHead || '';
    this.establishedDate = json.establishedDate || '';
    this.description = json.description || '';
    this.accountHead = json.accountHead || '';
    this.status = json.status || '';
    this.validFrom = json.validFrom || '';
    this.validTill = json.validTill || null;
    this.createdAt = json.createdAt || '';
    this.updatedAt = json.updatedAt || null;
    this.createdBy = json.createdBy || '';
    this.modifiedBy = json.modifiedBy || null;
    this.deletedAt = json.deletedAt || null;
    this.version = json.version || 1;
  }
}
