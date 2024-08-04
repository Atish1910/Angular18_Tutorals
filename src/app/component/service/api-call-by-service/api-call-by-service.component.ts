import {
  JsonPipe
} from '@angular/common';
import {
  Component,
  OnInit,
  inject
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import {
  HttpClient
} from '@angular/common/http';
import {
  DepartmentService
} from '../department.service';


@Component({
  selector: 'app-api-call-by-service',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, JsonPipe],
  templateUrl: './api-call-by-service.component.html',
  styleUrl: './api-call-by-service.component.css'
})
export class ApiCallByServiceComponent implements OnInit {



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

  constructor(private deptServ: DepartmentService) {}



  ngOnInit(): void {
    this.getDepartment();
  }


  onsave(){
    this.deptServ.postAllDept(this.deptObj).subscribe((res:any)=>{
      debugger
      if (res.result) {
        alert("Your DepartMent is created Successfully")
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

  // getDepartment() {
  // this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((res: any) => {

  // this.deptList = res.data;
  // })
  // }

  getDepartment() {
    debugger
    this.deptServ.getAllDept().subscribe((res: any) => {
      debugger
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
        alert("Your DepartMent is updated Successfully")
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
      this.http.delete("https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId=" +
        id).subscribe((res: any) => {
        debugger
        if (res.result) {
          alert("Your DepartMent is Deleted Successfully")
          this.getDepartment();
        } else {
          alert(res.message)
        }
      })

    }

  }


}
