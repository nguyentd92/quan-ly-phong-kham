import {PrescriptionDetails} from "./prescription-details.model";

export interface Prescription {
  id: number;
  symptoms: string;
  diagnosis: string;
  pres_price: number;
  medication_price: number;
  bill_price: number;
  patient_id: number;
  re_exam_to?: number;
  note: string;
  details: PrescriptionDetails[];
  created_at: Date;
  created_at_str: string;
}
