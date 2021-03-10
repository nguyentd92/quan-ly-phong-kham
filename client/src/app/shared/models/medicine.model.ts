import {MedicineUnit} from "./medicine-unit.model";
import {Medication} from "./medication.model";
import { MedicineUnitSmall } from "./medicine-unit-small.model";

export class Medicine {
  id: number;
  name: string;
  unit_sell_price: number;
  in_stocks: number;

  unit_small_id: number;
  unit_large_id: number;

  unit_vol_small: string;
  unit_vol_large: string;

  medication_id: number;

  images?: string[];

  medication?: Medication;
  med_unit_small?: MedicineUnitSmall;
  med_unit_large?: MedicineUnit;
}
