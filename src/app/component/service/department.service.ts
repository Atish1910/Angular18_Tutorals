import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) {}


  getAllDept(){
    return this.http.get( constant.API_URL)
  }

  postAllDept(obj:any){
    return this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment",obj)
  }

}
