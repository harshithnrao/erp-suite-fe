export class Feedback {
  id: number;
  leadId: number;
  leadName: string;
  rating: number;
  comment: string;
  validFrom: string | Date;
  validTill: string | Date | null;
  createdAt: string | Date;
  updatedAt: string | Date | null;
  deletedAt: string | Date | null;
  version: number;
  createdBy: string;
  modifiedBy: string | null;

  constructor(json?: any) {
    this.id = json?.id || 0;
    this.leadId = json?.leadId || 0;
    this.leadName = json?.leadName || '';
    this.rating = json?.rating || 0;
    this.comment = json?.comment || '';
    this.validFrom = json?.validFrom ? new Date(json.validFrom) : null;
    this.validTill = json?.validTill ? new Date(json.validTill) : null;
    this.createdAt = json?.createdAt ? new Date(json.createdAt) : null;
    this.updatedAt = json?.updatedAt ? new Date(json.updatedAt) : null;
    this.deletedAt = json?.deletedAt ? new Date(json.deletedAt) : null;
    this.version = json?.version || 1;
    this.createdBy = json?.createdBy || 'admin';
    this.modifiedBy = json?.modifiedBy || null;
  }
}
