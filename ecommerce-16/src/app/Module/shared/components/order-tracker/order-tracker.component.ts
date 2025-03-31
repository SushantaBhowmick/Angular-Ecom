import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-order-tracker',
  templateUrl: './order-tracker.component.html',
  styleUrls: ['./order-tracker.component.scss'],
})
export class OrderTrackerComponent {
  @Input() steps: any;
  @Input() activeStep: any;

  ngOnInit(){
    console.log(this.steps)
  }
}
