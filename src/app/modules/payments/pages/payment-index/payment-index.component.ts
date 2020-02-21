import { Component, OnInit } from '@angular/core';
import { GeneratorService } from 'src/app/modules/generator/services/generator.service';
import { PaymentService } from '../../services/payment.service';
import { Payment } from 'src/app/models/Payment';


@Component({
  selector: 'app-payment-index',
  templateUrl: './payment-index.component.html',
  styleUrls: ['./payment-index.component.css']
})
export class PaymentIndexComponent implements OnInit {

  code: string;
  payments: Payment[];

  constructor(
    private generatorService: GeneratorService,
    private paymentService: PaymentService) {
    this.generatorService.sendCodeSource.subscribe({
      next: (code) => {
        this.code = code;
      }
    });
  }

  ngOnInit(): void {
    this.getAllPayments();
  }

  savePayment = (paymentData: any) => {
    console.log(paymentData);
    const payment = new Payment(paymentData.payment, paymentData.ammount, this.code, 100);
    this.paymentService.savePayment(payment);
  }

  getAllPayments = () => {
    this.paymentService.allPayments().subscribe(payments => this.payments = payments);
  }
}
