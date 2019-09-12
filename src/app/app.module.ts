import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppDemoComponent } from './demo/app-demo.component';
import { AutoComponent } from './auto/auto.component';
import { NavComponent } from './nav/nav.component';
import { ReferenceDataComponent } from './reference-data/reference-data.component';
import { ReferenceDataFilter } from "./reference-data/ReferenceDataFilter";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PositionDataComponent } from './position/position-data/position-data.component';
import { AccountComponent } from './reference-data/account/account.component';
import { PositionComponent } from './position/position.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { InputFormatDirective } from './input-format.directive';
import { ReportsComponent } from './reports/reports.component'
import { ActivatedRoute } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SystemComponent } from './system/system.component';
import { SystemChangeComponent } from './system-change/system-change.component';
import { ModuleDemoComponent } from './module-demo/module-demo.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomReferenceDataPipe } from './reference-data/custom-reference-data.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AppDemoComponent,
    AutoComponent,
    NavComponent,
    ReferenceDataComponent,
    ReferenceDataFilter,
    PositionDataComponent,
    AccountComponent,
    PositionComponent,
    FooterComponent,
    InputFormatDirective,
    ReportsComponent,
    SignupComponent,
    SystemComponent,
    SystemChangeComponent,
    ModuleDemoComponent,
    CustomReferenceDataPipe 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
