import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  cart:any=[1,2,3];

  constructor(private router:Router) { }

  navigateToCheckout(){
    console.log("Navigating to checkout");
    this.router.navigate(['checkout']);
  }

}
