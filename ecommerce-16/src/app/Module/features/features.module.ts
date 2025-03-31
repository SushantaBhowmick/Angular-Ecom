import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './components/feature.component';
import { HomeComponent } from './components/home/home.component';
import { MainCarouselComponent } from './components/home/main-carousel/main-carousel.component';
import { HomeProductCardComponent } from './components/home/home-product-card/home-product-card.component';
import { HomeProductSliderComponent } from './components/home/home-product-slider/home-product-slider.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "../shared/shared.module";
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PaymentComponent } from './components/payment/payment.component';
import { SuccessComponent } from './components/success/success.component';
import { OrderComponent } from './components/order/order.component';
import { OrderDetailsComponent } from './components/order/order-details/order-details.component';
import { ProductReviewCardComponent } from './components/product-details/product-review-card/product-review-card.component';
import { AddressFormComponent } from './components/checkout/address-form/address-form.component';
import { OrderCardComponent } from './components/order/order-card/order-card.component';

const routers: Routes = [
  {path: '', component: ProductsComponent},
];



@NgModule({
  declarations: [
    FeatureComponent,
    HomeComponent,
    MainCarouselComponent,
    HomeProductCardComponent,
    HomeProductSliderComponent,
    ProductsComponent,
    CartComponent,
    ProductDetailsComponent,
    CheckoutComponent,
    PaymentComponent,
    SuccessComponent,
    OrderComponent,
    OrderDetailsComponent,
    ProductReviewCardComponent,
    AddressFormComponent,
    OrderCardComponent,
  ],
  imports: [
    RouterModule.forChild(routers),
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatCheckboxModule,
    MatRadioModule,
    FormsModule,
    SharedModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
],
  exports: [
    FeatureComponent,
    HomeComponent,
    ProductsComponent,
  ]
})
export class FeaturesModule { }
