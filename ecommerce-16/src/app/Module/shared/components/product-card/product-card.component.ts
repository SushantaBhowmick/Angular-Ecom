import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product: any;

  constructor(private router: Router) {}

  navigateToProductDetails(id: any) {
    this.router.navigate([`/product/${id}`]);
  }
}
