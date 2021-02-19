import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {StatisticComponent} from "./statistic.component";

const STATISTIC_ROUTES: Routes = [
  {
    path: '',
    component: StatisticComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(STATISTIC_ROUTES)
  ]
})
export class StatisticModule { }
