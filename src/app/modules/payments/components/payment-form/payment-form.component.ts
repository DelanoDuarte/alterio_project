import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {

  private paymentForm = new FormGroup({
    payment: new FormControl('', [
      Validators.required
    ]),
    ammount: new FormControl('', [
      Validators.required
    ]),
  });

  @Output()
  submitEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void { }

  submitForm = () => {
    try {
      this.submitEvent.emit(this.paymentForm.value);
    } catch (error) {

    } finally {
      this.paymentForm.reset();
    }
  }

}
