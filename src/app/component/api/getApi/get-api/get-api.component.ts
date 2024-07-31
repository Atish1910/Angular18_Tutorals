import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {

  listOfUers : any [] = []

  constructor (private http : HttpClient){

  }
  getAllUser(){
    debugger
    
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res : any) =>{
    
    debugger
    
    this.listOfUers = res;

    })
  }

  listOfAllStudents : any [] = []

  getAllStudents(){
    debugger

    this.http.get("https://projectapi.gerasim.in/api/RealEstate/GetAllCustomers").subscribe((res : any) =>{
      
    debugger
    
    this.listOfAllStudents = res.data; 

    })
  }

}
