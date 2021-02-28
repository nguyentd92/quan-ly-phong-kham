import {MedicineUnit} from "./medicine-unit.model";
import {Medication} from "./medication.model";

export class Medicine {
  id: number;
  name: string;
  unit_sell_price: number;
  in_stocks: number;
  unit_vol: string;
  med_unit?: MedicineUnit;
  medication?: Medication;
  images?: string[];
}
