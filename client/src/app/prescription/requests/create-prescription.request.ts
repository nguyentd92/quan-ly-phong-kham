export interface CreatePrescriptionRequest {

  p_id: number | null;
  p_full_name: string;
  p_dob: string;
  p_gender: boolean;
  p_guardian: string;
  p_phone: string;
  p_address: string;

  symptoms: string;
  pathology: string;

  med_list: MedItem[];

  bill_total: number;
  note: string;
}

interface MedItem {
  id: number;
  days: number;
  amount: number;
  unit_price: number;
  total_price: number;
}

interface MedTime {
  amount: number;
  note: string;
}
