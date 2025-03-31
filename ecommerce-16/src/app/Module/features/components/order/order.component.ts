import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {

  orderFilter: any = [
    { lable: 'On The Way', value: 'all' },
    // { lable: 'Pending', value: 'pending' },
    { lable: 'Delivered', value: 'delivered' },
    { lable: 'Cancelled', value: 'cancelled' },
    { lable: 'Return', value: 'return' },
  ];
  selectedFilter: any = 'all';
  orders: any = [
    {
      id: 1,  orderNumber: 'ORD-1234',  date: '2021-09-01',  status: 'pending',  total: 100,  items: [1,2,3],
    },
    { id: 2,  orderNumber: 'ORD-1235',  date: '2021-09-02',  status: 'delivered',  total: 200,  items: [1,2], },
    { id: 3,  orderNumber: 'ORD-1236',  date: '2021-09-03',  status: 'cancelled',  total: 300,  items: [1,2,3], },
    { id: 4,  orderNumber: 'ORD-1237',  date: '2021-09-04',  status: 'pending',  total: 400,  items: [], },
    { id: 5,  orderNumber: 'ORD-1238',  date: '2021-09-05',  status: 'delivered',  total: 500,  items: [], },    
  ]

    constructor(private router:Router){}
  
    navigateToOrderDetails(id:any){
      this.router.navigate([`order/${id}`])
    }

}
