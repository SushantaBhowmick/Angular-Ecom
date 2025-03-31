import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './components/shared.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavContentComponent } from './components/navbar/nav-content/nav-content.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { RatingsComponent } from './components/ratings/ratings.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { AddressCardComponent } from './components/address-card/address-card.component';
import { OrderTrackerComponent } from './components/order-tracker/order-tracker.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    SharedComponent,
    NavbarComponent,
    NavContentComponent,
    FooterComponent,
    ProductCardComponent,
    RatingsComponent,
    CartItemComponent,
    AddressCardComponent,
    OrderTrackerComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    RouterModule,
    MatDividerModule
  ],
  exports: [
    SharedComponent,
    NavbarComponent,
    FooterComponent,
    ProductCardComponent,
    RatingsComponent,
    CartItemComponent,
    AddressCardComponent,
    OrderTrackerComponent
  ],
})
export class SharedModule {}
