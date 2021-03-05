import { Patient } from "src/app/shared/models/patient.model";
import { Prescription } from "src/app/shared/models/prescription.model";

export interface GetPrescriptionsResponse {
  pageIndex: number;
  pageSize: number;
  queryParams?: {
    name: string;
    dob: string;
    phone: string;
    address: string;
  };
  data: Partial<Patient>[]
}
