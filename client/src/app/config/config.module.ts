import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigComponent } from './config.component';
import { RouterModule, Routes } from '@angular/router';

const CONFIG_ROUTES: Routes = [
  {
    path: '',
    component: ConfigComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CONFIG_ROUTES)
  ],
  declarations: [ConfigComponent]
})
export class ConfigModule { }
