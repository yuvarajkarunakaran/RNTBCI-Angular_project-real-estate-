import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Code1Component } from './code1/code1.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component'
import { PaymentComponent } from './payment/payment.component';
import { SignUpComponent } from './sign-up/sign-up.component';
const routes: Routes = [
  {
    path:'login',component:LoginComponent
  },
  {
    path:'sign-up',component:SignUpComponent
  },
  {
    path:'footer',component:FooterComponent
  },
  {
    path:'zipcode1/:pm', component:Code1Component
  },
  {
    path:'pay',component:PaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
