import { Component } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent {
  Orders: any=[1,2,3];
  steps = [
    { id: 0, title: 'PLACED', isCompleted: true },
    { id: 1, title: 'CONFIRMED', isCompleted: true },
    { id: 2, title: 'SHIPPE', isCompleted: false },
    { id: 3, title: 'DELIVERED', isCompleted: false },
  ];
}
