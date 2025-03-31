import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {

  products:any=[1,2,3];
  cart:any=[1,2,3];

  constructor() { }

  ngOnInit(): void {
  }

  

}
