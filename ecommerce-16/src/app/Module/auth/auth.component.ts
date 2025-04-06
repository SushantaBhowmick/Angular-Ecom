import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {


  isLoggedIn = true;

  constructor() { }

  ngOnInit(): void {}

  changeTemplate(){
    console.log('changeTemplate');
    this.isLoggedIn = !this.isLoggedIn;
    console.log(this.isLoggedIn);
  }

}
