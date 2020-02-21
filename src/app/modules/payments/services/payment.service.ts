import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Payment } from 'src/app/models/Payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private payments: Payment[];

  constructor() {
    this.payments = [];
  }

  savePayment(payment: Payment) {
    this.payments.push(payment);
  }

  allPayments(): Observable<Payment[]> {
    return of(this.payments);
  }

}
