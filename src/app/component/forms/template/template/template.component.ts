import {
  JsonPipe
} from '@angular/common';
import {
  Component
} from '@angular/core';
import {
  FormsModule
} from '@angular/forms';

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

  formValue: any;

  onSubmit() {
    debugger
    this.formValue = this.studentObj;
  }
  resetForm() {
    this.formValue = this.studentObj;
  }

}
