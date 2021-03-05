export class Patient {
  id: number;
  full_name: string;
  dob: Date;
  gender: boolean;
  phone: string;
  address: string;
  guardian: string;

  gender_str?: string;
  age_str?: string;
  dob_str?: string;

  age_int?: number;

  last_exam_at?: Date;
}

export type Patients = Patient[];
