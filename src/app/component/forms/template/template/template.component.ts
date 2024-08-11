import {
  JsonPipe
} from '@angular/common';
import {
  Component
} from '@angular/core';
import {
  FormsModule
} from '@angular/forms';
import { constant } from '../../../constant/constant';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent {

  studentObj: any = {
    name: "",
    mobileNumber: "",
    email: "",
    state: "",
    city: "",
    message : "",
    isAcceptTerms: false
  }

  // use this messgae from constant file
  validationMessgae : any = constant.VALIDATION_MESSAGE;

  formValue: any;

  onSubmit() {
    debugger
    this.formValue = this.studentObj;
  }
  resetForm() {
    this.formValue = this.studentObj;
  }

}
