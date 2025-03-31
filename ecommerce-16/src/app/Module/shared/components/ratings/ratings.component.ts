import { Component } from '@angular/core';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss']
})
export class RatingsComponent {

  maxRating=5;
  initialRating=3;
  ratings:any;
  currentRating:any = 0;

  constructor() { 
    this.ratings = Array(this.maxRating).fill(0).map((_,i)=>i);
    this.currentRating = this.initialRating;
  }

  ngOnInit(){
    // this.currentRating = this.initialRating;
  } 

  rate(rating:any){
    this.currentRating = rating;
  }

}
