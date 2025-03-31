import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent {
  addresses = [1,2,3]
  
  constructor(private formBuilder:FormBuilder) { }
  
  myForm: FormGroup=this.formBuilder.group({
    firstName: ['',Validators.required],
    lastName: ['',Validators.required],
    streetAddress: ['',Validators.required],
    city: ['',Validators.required],
    state: ['',Validators.required],
    zipCode: ['',Validators.required],
    mobile: ['',Validators.required],
  });

  handleCreateOrder(item:any) {}


  handleSubmit() {
    const formValue = this.myForm.value;
    console.log(formValue);
  }

}
