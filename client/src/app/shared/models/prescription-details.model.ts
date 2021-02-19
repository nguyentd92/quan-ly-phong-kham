import {Medicine} from "./medicine.model";

export interface PrescriptionDetails {
  medicine: Medicine;
  each_morning: string;
  each_noon: string;
  each_afternoon: string;
  each_night: string;
  unit_sell_price_default: number;
  unit_sell_price_fixed: number;
}
