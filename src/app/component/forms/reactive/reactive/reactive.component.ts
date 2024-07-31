import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {

  studentForm : FormGroup = new FormGroup ({

    name : new FormControl("", [Validators.required, Validators.minLength(4)] ),
    mobileNumber : new FormControl("", [Validators.required , Validators.minLength(10)] ),
    email : new FormControl("", [Validators.required , Validators.email] ),
    state : new FormControl("", [Validators.required , Validators.nullValidator]  ),
    city : new FormControl("", [Validators.required, Validators.minLength(3)]),
    message : new FormControl("", [Validators.required, Validators.minLength(10)] ),
    isAcceptTerms : new FormControl("", [Validators.required , Validators.requiredTrue] ),
  });

  formValue : any ;

  onSave() {
    debugger
    this.formValue = this.studentForm.value;
  }

  resetValues: any = {
    name: "",
    mobileNumber: "",
    email: "",
    state: "",
    city: "",
    message : "",
    isAcceptTerms: false
  }
  
  resetForm() {
    this.formValue = this.resetValues;

  }


}
