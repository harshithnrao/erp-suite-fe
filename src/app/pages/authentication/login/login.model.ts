export type LoginModel = {
  id: number;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  hireDate: string;
  jobTitle: string;
  departmentId: number;
  status: string;
  validFrom: string;
  validTill: string | null;
  createdAt: string;
  updatedAt: string | null;
  deletedAt: string | null;
  version: number;
  createdBy: string;
  modifiedBy: string | null;
};
