import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { OrdersTableComponent } from './components/orders-table/orders-table.component';
import { CustomersComponent } from './components/customers/customers.component';
import { CreateProductComponent } from './components/create-product/create-product.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    AdminProductsComponent,
    OrdersTableComponent,
    CustomersComponent,
    CreateProductComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule,
  ]
})
export class AdminModule { }
