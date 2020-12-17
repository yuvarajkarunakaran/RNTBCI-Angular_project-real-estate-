import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Code1Component } from './code1/code1.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {path:'zipcode1/:pm', component:Code1Component},
  {path:'pay',component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
