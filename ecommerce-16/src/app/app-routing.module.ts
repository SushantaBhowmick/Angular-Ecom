import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductsComponent } from './Module/features/components/products/products.component';
import { HomeComponent } from './Module/features/components/home/home.component';
import { CartComponent } from './Module/features/components/cart/cart.component';
import { ProductDetailsComponent } from './Module/features/components/product-details/product-details.component';
import { CheckoutComponent } from './Module/features/components/checkout/checkout.component';
import { PaymentComponent } from './Module/features/components/payment/payment.component';
import { SuccessComponent } from './Module/features/components/success/success.component';
import { OrderComponent } from './Module/features/components/order/order.component';
import { OrderDetailsComponent } from './Module/features/components/order/order-details/order-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'products', loadChildren: () => import('./Module/features/features.module').then((m) => m.FeaturesModule) },
  { path: 'cart', component: CartComponent },
  // { path: 'product-detail/:id', component: ProductDetailsComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'checkout/payment/:id', component: PaymentComponent },
  { path: 'payment-success', component: SuccessComponent },
  { path: 'account/orders', component: OrderComponent },
  { path: 'order/:id', component: OrderDetailsComponent },
  { path: ':levelOne/:levelTwo/:levelThree', component: ProductsComponent },
  {
    path: 'admin',
    loadChildren: () =>
      import('./Module/admin/admin.module').then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
