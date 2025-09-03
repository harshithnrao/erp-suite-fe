export class Employee {
  id: number;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  hireDate: string | Date;
  jobTitle: string;
  departmentId: number;
  status: 'Active' | 'Inactive';
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
    this.name = json?.name || '';
    this.email = json?.email || '';
    this.password = json?.password || '';
    this.phoneNumber = json?.phoneNumber || '';
    this.hireDate = json?.hireDate ? new Date(json.hireDate) : null;
    this.jobTitle = json?.jobTitle || '';
    this.departmentId = json?.departmentId || 0;
    this.status = json?.status || 'Active';
    this.validFrom = json?.validFrom ? new Date(json.validFrom) : null;
    this.validTill = json?.validTill ? new Date(json.validTill) : null;
    this.createdAt = json?.createdAt ? new Date(json.createdAt) : null;
    this.updatedAt = json?.updatedAt ? new Date(json.updatedAt) : null;
    this.deletedAt = json?.deletedAt ? new Date(json.deletedAt) : null;
    this.version = json?.version || 1;
    this.createdBy = json?.createdBy || '';
    this.modifiedBy = json?.modifiedBy || null;
  }
}
