import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { lehngacholiPage2 } from 'src/Data/Saree/lenghaCholiPage2';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  selectedSize:any;
  reviews = [1,2,3,4,5,6,7,8,9,10];
  relatedProducts :any;

  constructor(private router:Router) { } 

  handleAddToCart() {
    console.log("Add to cart clicked",this.selectedSize);

    this.router.navigate(['cart'])
  }

  ngOnInit(){
    this.relatedProducts = lehngacholiPage2.slice(0,5);
  }

}
