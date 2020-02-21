import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PaymentsRoutingModule } from './payments-routing.module';
import { PaymentIndexComponent } from './pages/payment-index/payment-index.component';
import { PaymentListComponent } from './components/payment-list/payment-list.component';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';
import { GeneratorModule } from '../generator/generator.module';

@NgModule({
  declarations: [PaymentIndexComponent, PaymentListComponent, PaymentFormComponent],
  imports: [
    CommonModule,
    PaymentsRoutingModule,
    ReactiveFormsModule,
    GeneratorModule
  ],
  exports: [
    PaymentIndexComponent
  ]
})
export class PaymentsModule { }
