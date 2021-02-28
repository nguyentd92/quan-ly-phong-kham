import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { VndCurrencyPipe } from './vnd-currency.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    VndCurrencyPipe
  ],
  providers: [
    CurrencyPipe,
    VndCurrencyPipe
  ],
  exports: [
    VndCurrencyPipe
  ]
})
export class VndCurrencyPipeModule { }
