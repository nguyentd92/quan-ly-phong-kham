export interface BillPrescriptionResponse {
  id: number;
  p_name: string;
  p_dob: string;
  p_gender: string;
  p_age_str: string;
  p_guardian: string;
  p_phone: string;
  p_address: string;

  symptoms: string;
  pathology: string;

  bill_total: number;
  note: string;

  m_list: MedicineInPrescription[]

  exam_at: Date;
  exam_at_str: string;
  signer: string;
}

export interface MedicineInPrescription {
  m_name: string;
  m_amount: string;
  m_note: string;
}
