export interface SearchPrescriptionRequest {
  name?: string;
  dob?: Date;
  phone?: string;
  address?: string;
  pageIndex: number;
  pageSize: number;
}
