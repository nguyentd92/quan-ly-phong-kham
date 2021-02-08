import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateExaminationComponent} from './pages/create-examination/create-examination.component';
import {BillExaminationComponent} from './pages/bill-examination/bill-examination.component';
import {ListExaminationComponent} from './pages/list-examination/list-examination.component';
import {RouterModule, Routes} from '@angular/router';

const EXAMINATION_ROUTES: Routes = [
  {
    path: '/',
    component: ListExaminationComponent
  },
  {
    path: 'tao-phieu-kham',
    component: CreateExaminationComponent
  },
  {
    path: 'toa-kham-benh/:id',
    component: BillExaminationComponent
  }
];

@NgModule({
  declarations: [CreateExaminationComponent, BillExaminationComponent, ListExaminationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(EXAMINATION_ROUTES)
  ]
})
export class ExaminationModule {
}
