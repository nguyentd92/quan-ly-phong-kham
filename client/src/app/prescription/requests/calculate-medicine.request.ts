export interface CalculateMedicineRequest {
  med_id: number;
  name: string;

  a_morning: number;
  a_noon: number;
  a_afternoon: number;
  a_evenight: number;

  c_morning: boolean;
  c_noon: boolean;
  c_afternoon: boolean;
  c_evenight: boolean;

  n_morning: string;
  n_noon: string;
  n_afternoon: string;
  n_evenight: string;

  amount: number;
  days: number;

  u_price: number;
  is_cus_u_price: boolean;
  s_price: number;
  is_cus_s_price: boolean;
}
