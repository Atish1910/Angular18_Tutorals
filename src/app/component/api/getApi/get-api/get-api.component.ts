import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from '../../../modal/class/department';
import { IAllstudent } from '../../../modal/interface/IDepartment';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {

  listOfUers : User [] = []

  constructor (private http : HttpClient){

  }
  getAllUser(){
    debugger
    
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res : any) =>{
    
    debugger
    
    this.listOfUers = res;

    })
  }

  listOfAllStudents : IAllstudent [] = []

  getAll(){
    debugger

    this.http.get("https://projectapi.gerasim.in/api/RealEstate/GetAllCustomers").subscribe((res : any) =>{
      
    debugger
    
    this.listOfAllStudents = res.data; 

    })
  }

}
