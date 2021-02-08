import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpsertAccountComponent } from './pages/upsert-account/upsert-account.component';
import { ListAccountComponent } from './pages/list-account/list-account.component';
import {RouterModule, Routes} from "@angular/router";

const ACCOUNT_ROUTES: Routes = [
  {
    path: "/",
    component: ListAccountComponent
  },
  {
    path: "create",
    component: UpsertAccountComponent,
    data: {
      isCreate: true
    }
  },
  {
    path: "edit/:id",
    component: UpsertAccountComponent,
    data: {
      isCreate: false
    }
  }
];

@NgModule({
  declarations: [UpsertAccountComponent, ListAccountComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ACCOUNT_ROUTES)
  ]
})
export class AccountModule { }
