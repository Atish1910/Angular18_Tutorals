import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterLink, RouterOutlet } from '@angular/router';
import {Router } from '@angular/router';

@Component({
  selector: 'app-structural-directive',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterOutlet ],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {

  isMyDiv1IsVisible : boolean = true;
  isMyDiv2IsVisible : boolean = false;
  isActive : boolean = true;
  num1 : string = '';
  num2 : string = '';
  isMyDiv4IsVisible : boolean = false;
  selectedCity : string = '';


  constructor(private router: Router) {
  }

  navigateToAttribute(){
    this.router.navigateByUrl('directive-attribute');
}

  

  hideMyDiv(){
    this.isMyDiv1IsVisible = false;
  }
  
  ShowMyDiv(){
    this.isMyDiv1IsVisible = true;
  }


  toggleMyButton(){
    this.isMyDiv2IsVisible = !this.isMyDiv2IsVisible;

    // if(this.isMyDiv2IsVisible == true)
    // {
    //   this.isMyDiv2IsVisible = false;
    // }
    // else
    // {
    //   this.isMyDiv2IsVisible = true
    // }
  }

  onCheckBox(){
    this.isMyDiv4IsVisible = !this.isMyDiv4IsVisible;
  }


  ///////////////////////ngFor//////////////////////////////

  CityArray : string [] = ['Pune','Mumbai','Thane','Nashik','Kolhapur'];


  studentlist : any [] = [
    {studentId : 1, name : "A", City : "pune", isActive : true},
    {studentId : 2, name : "B", City : "Mumbai", isActive : true},
    {studentId : 3, name : "C", City : "Thane", isActive : true},
    {studentId : 4, name : "D", City : "kolhapur", isActive : true},
    {studentId : 5, name : "E", City : "goa", isActive : true}
  ]

  
 
}
