import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/State/Auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  @Output() templateChange: EventEmitter<void>= new EventEmitter<void>();
  

  constructor(private formBuilder: FormBuilder, private store: Store,private authService:AuthService) {}

  loginForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  submitForm(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value)
      console.log('Form Submitted', this.loginForm.value);
    }
  }

  changeTemplate(){
    this.templateChange.emit();
  }
}
