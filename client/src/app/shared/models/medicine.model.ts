import {MedicineUnit} from "./medicine-unit.model";
import {Medication} from "./medication.model";
import { MedicineUnitSmall } from "./medicine-unit-small.model";

export class Medicine {
  id: number;
  name: string;
  unit_sell_price: number;
  in_stocks: number;

  unit_sm_id: number;
  unit_lg_id: number;

  unit_sm_vol: string;
  unit_lg_vol: string;

  medication_id: number;

  images?: string[];

  medication?: Medication;
  med_unit_small?: MedicineUnitSmall;
  med_unit_large?: MedicineUnit;
}
