export interface CalculateMedicineResponse {
  med_id: number;
  med_title: string;

  amount_str: string;
  u_price: number;
  s_price: number;

  note_str: string;
}
