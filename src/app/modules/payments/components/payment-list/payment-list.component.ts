import { Component, OnInit, Input } from '@angular/core';
import { Payment } from 'src/app/models/Payment';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit {

  @Input()
  payments;

  get payment(): Payment[] {
    return this.payments;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
