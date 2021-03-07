import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AccessLogComponent } from './pages/access-log/access-log.component';
import { BugLogComponent } from './pages/bug-log/bug-log.component';

const SYSTEM_HISTORY_ROUTES: Routes = [
  {
    path: "truy-cap",
    component: AccessLogComponent
  },
  {
    path: "loi",
    component: BugLogComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SYSTEM_HISTORY_ROUTES)
  ],
  declarations: []
})
export class SystemHistoryModule { }
