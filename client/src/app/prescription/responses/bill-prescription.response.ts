import {Prescription} from "../../shared/models/prescription.model";

export interface BillPrescriptionResponse {
  patient: {
    id: number;
    full_name: string;
    gender_str: string;
    gender: boolean;
    dob: Date;
    age: number;
    age_str: string;
    phone: string;
    address: string;
    guardian: string;
  };
  prescription: Prescription;
  medicines: Array<{
    med_name: string;
    formulea: string;
    amount: number;
  }>;
}
