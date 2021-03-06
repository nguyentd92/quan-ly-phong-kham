export interface CreatePrescriptionRequest {
  // If has p_id (patient id), then create for old patient
  p_id?: number;
  p_full_name?: string;
  p_dob?: string;
  p_gender?: boolean;
  p_guardian?: string;
  p_phone?: string;
  p_address?: string;

  symptoms: string;
  pathology: string;

  med_list: MedItem[];

  bill_total: number;
  pres_price: number;

  note: string;

  // If has number, this is The Create of ReExam
  re_exam_to?: number;
}

interface MedItem {
  id: number;
  formulea: string;
  amount: number;
  unit_price: number;
  total_price: number;
}
