import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  
  cart:any=[1,2,3]; // This is a dummy data. You can replace this with your actual data.    
  quantity:any = 1;
  @Input() showButton:any;;

  constructor() { }

  ngOnInit(): void {
  }


  updateCartItem(num:Number){
    this.quantity = this.quantity + num;
  }

  removeCartItem(){
    this.cart.pop();
  }
 


}
