import {JsonPipe} from '@angular/common';
import {  HttpClient} from '@angular/common/http';
import {Component,inject,OnInit} from '@angular/core';
import {  FormControl,  FormGroup,  FormsModule,  ReactiveFormsModule,  Validators} from '@angular/forms';
@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, JsonPipe],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent implements OnInit {

  deptObj: any = {
    "departmentId": 0,
    "departmentName": "",
    "departmentLogo": ""
  }

  departmentForm: FormGroup = new FormGroup({
    deptName: new FormControl("", [(Validators.required)]),
    deptImage: new FormControl("", [(Validators.required)])
  })

  formValue: any;

  http = inject(HttpClient);

  ngOnInit(): void {
    this.getDepartment();
  }

  onSave() {

    this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment", this.deptObj).subscribe((res: any) => {
      // debugger
      if (res.result) {
        alert("Your DepartMent is  created Successfully")
        this.getDepartment();
      } else {
        alert(res.message)
      }
    })
    this.formValue = this.departmentForm.value;
  }
  resetData: any = {
    departmentId: "",
    departmentName: "",
    departmentLogo: ""
  }
  onReset() {
    debugger
    this.deptObj = this.resetData;
  }

  deptList: any[] = [];

  getDepartment() {
    this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((res: any) => {

      this.deptList = res.data;
    })
  }

  ///////////////////////////////////////////////////////////
  onEdit(data: any) {
    this.deptObj = data;
  }


  onUpdate() {

    // debugger
    this.http.post("https://projectapi.gerasim.in/api/Complaint/UpdateDepartment", this.deptObj).subscribe((res: any) => {
      // debugger
      if (res.result) {
        alert("Your DepartMent is  updated Successfully")
        this.getDepartment();
      } else {
        alert(res.message)
      }
    })

  }

  onDelete(id: number) {

    const isDelete = confirm("Are You Sure to delete this Record?..");



    if (isDelete) {
      // debugger
      this.http.delete("https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId=" + id).subscribe((res: any) => {
        debugger
        if (res.result) {
          alert("Your DepartMent is  Deleted Successfully")
          this.getDepartment();
        } else {
          alert(res.message)
        }
      })

    }

  }

}
