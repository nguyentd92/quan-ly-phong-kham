import { Patient } from "src/app/shared/models/patient.model";

export interface ListPrescriptionResponse {
  pageIndex: number;
  pageSize: number;
  totalPage: number;
  list: PrescriptionItem[]
}

export interface PrescriptionItem {
  id: number;
  patient: {
    full_name: string;
    age: number;
    phone: string;
    address: string;
  };
  pathology: string;
  exam_at: Date;
}
