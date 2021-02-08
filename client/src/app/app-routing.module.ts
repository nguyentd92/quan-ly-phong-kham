import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DemoComponent } from './pages/demo/demo.component';
import { HomeComponent } from './pages/home/home.component';

const ROUTES: Routes = [
  {
    path: "",
    component: DemoComponent
  },
  {
    path: "_auth",
    loadChildren: () => import('../_auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: "examination",
    loadChildren: () => import('./examination/examination.module').then(m => m.ExaminationModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
