export class FollowUp {
  id: number;
  leadName: string;
  visitedBy: string;
  visitedTo: string;
  visitDate: string | Date;
  reasonForVisit: string;
  nextFollowUp: string | Date;
  validFrom: string | Date;
  validTill: string | Date | null;
  createdAt: string | Date;
  updatedAt: string | Date | null;
  deletedAt: string | Date | null;
  createdBy: string;
  modifiedBy: string | null;
  version: number;
  leadId: number;

  constructor(json?: any) {
    this.id = json?.id || 0;
    this.leadName = json?.leadName || '';
    this.visitedBy = json?.visitedBy || '';
    this.visitedTo = json?.visitedTo || '';
    this.visitDate = json?.visitDate ? new Date(json.visitDate) : null;
    this.reasonForVisit = json?.reasonForVisit || '';
    this.nextFollowUp = json?.nextFollowUp ? new Date(json.nextFollowUp) : null;
    this.validFrom = json?.validFrom ? new Date(json.validFrom) : null;
    this.validTill = json?.validTill ? new Date(json.validTill) : null;
    this.createdAt = json?.createdAt ? new Date(json.createdAt) : null;
    this.updatedAt = json?.updatedAt ? new Date(json.updatedAt) : null;
    this.deletedAt = json?.deletedAt ? new Date(json.deletedAt) : null;
    this.createdBy = json?.createdBy || '';
    this.modifiedBy = json?.modifiedBy || null;
    this.version = json?.version || 1;
    this.leadId = json?.leadId || 0;
  }
}
