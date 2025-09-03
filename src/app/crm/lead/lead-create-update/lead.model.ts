export class Lead {
  id: number;
  customerId: number;
  name: string;
  source: string;
  status: string;
  assignedTo: string;
  validFrom: string;
  validTill: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  modifiedBy: string | null;
  deletedAt: string | null;
  version: number;
  customerName: string;

  constructor(json?: any) {
    this.id = json.id || 0;
    this.customerId = json.customerId || 0;
    this.customerName = json?.customerName || '';
    this.name = json.name || '';
    this.source = json.source || '';
    this.status = json.status || '';
    this.assignedTo = json.assignedTo || '';
    this.validFrom = json.validFrom || '';
    this.validTill = json.validTill || '';
    this.createdAt = json.createdAt || '';
    this.updatedAt = json.updatedAt || '';
    this.createdBy = json.createdBy || '';
    this.modifiedBy = json.modifiedBy || null;
    this.deletedAt = json.deletedAt || null;
    this.version = json.version || 1;
  }
}
