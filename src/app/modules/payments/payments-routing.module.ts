import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentIndexComponent } from './pages/payment-index/payment-index.component';


const routes: Routes = [
  { path: '', component: PaymentIndexComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
