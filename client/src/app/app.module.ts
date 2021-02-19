import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {DemoComponent} from './pages/demo/demo.component';
import {HomeComponent} from './pages/home/home.component';
import {NZ_I18N} from 'ng-zorro-antd/i18n';
import {vi_VN} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import vi from '@angular/common/locales/vi';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppLayoutComponent } from './shared/components/app-layout/app-layout.component';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {NzDrawerModule} from "ng-zorro-antd/drawer";
import {NzAutocompleteModule} from "ng-zorro-antd/auto-complete";
import {NzInputNumberModule} from "ng-zorro-antd/input-number";

registerLocaleData(vi);

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    HomeComponent,
    AppLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzMenuModule,
    NzModalModule,
    NzInputModule,
    ReactiveFormsModule,
    NzDatePickerModule,
    NzDrawerModule,
    NzAutocompleteModule,
    NzInputNumberModule
  ],
  providers: [{provide: NZ_I18N, useValue: vi_VN}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
