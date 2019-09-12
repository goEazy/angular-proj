import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReferenceDataComponent } from './reference-data/reference-data.component';
import { PositionComponent } from './position/position.component';
import { ReportsComponent } from './reports/reports.component';
import { SignupComponent } from './signup/signup.component';
import { SystemComponent } from './system/system.component';
import { ModuleDemoComponent } from './module-demo/module-demo.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: "reference-data", component: ReferenceDataComponent },
    { path: "signup", component: SignupComponent },
    { path: "system", component: SystemComponent },
    { path: "position", component: PositionComponent },
    { path: "reports/:id/:status", component: ReportsComponent },
    {
      path: "customers",
      loadChildren: () => import('./customers/customers.module').then(mod => mod.CustomersModule),

    },
    {
      path: "orders",
      loadChildren: () => import('./orders/orders.module').then(mod => mod.OrdersModule),

    }
  ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
