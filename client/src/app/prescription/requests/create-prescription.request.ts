export interface CreatePrescriptionRequest {
  patient: {
    id: number | null;
    full_name: string;
    dob: string;
    gender: boolean;
    guardian: string;
    phone: string;
    address: string;
  };

  symptom_ids: number[];
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
  med_times: {
    morning: MedTime | null;
    noon: MedTime | null;
    afternoon: MedTime | null;
    night: MedTime | null;
  },
  unit_price: number;
  total_price: number;
}

interface MedTime {
  amount: number;
  note: string;
}
