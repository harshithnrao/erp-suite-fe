export class Proposal {
  id: number;
  customerId: number;
  text: string;
  totalAmount: number;
  proposalDate: string;
  status: string;
  details: string;
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
    this.customerId = json.customerId || 0;
    this.text = json.text || '';
    this.totalAmount = json.totalAmount || 0;
    this.proposalDate = json.proposalDate || '';
    this.status = json.status || '';
    this.details = json.details || '';
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
