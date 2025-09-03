export class Document {
  file: File | null = null;
  id:number;
  employeeId: number = 0;
  documentType: string = '';
  documentNumber: string = '';
  filePath: string = '';
  issueDate: string | Date = '';
  expiryDate: string | Date = '';
  description: string = '';
  validFrom: string | Date = '';
  validTill: string | Date = '';
  createdBy: string = '';

  constructor(json?: any) {
    if (json) {

      this.id = json.id || 0;
      this.employeeId = json.employeeId || 0;
      this.documentType = json.documentType || '';
      this.documentNumber = json.documentNumber || '';
      this.filePath = json.filePath || '';
      this.issueDate = json.issueDate ? new Date(json.issueDate) : '';
      this.expiryDate = json.expiryDate ? new Date(json.expiryDate) : '';
      this.description = json.description || '';
      this.validFrom = json.validFrom ? new Date(json.validFrom) : '';
      this.validTill = json.validTill ? new Date(json.validTill) : '';
      this.createdBy = json.createdBy || '';
    }
  }
}
