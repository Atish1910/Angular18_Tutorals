import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink, RouterOutlet],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {

  div1BgColor : string = 'bg-primary';
  isDiv2Active : boolean = false;
  
  num1 : string = '';
  num2 : string = '';

  isActive : boolean = false
  
  addRedClass(){
    this.div1BgColor = 'bg-red'
  }
  addBlueClass(){
    this.div1BgColor = 'bg-blue'
  }
  toggleButton (){
    this.isDiv2Active = !this.isDiv2Active;
  }

  studentlist : any [] = [
    {studentId : 1, gender : 'Male' , studentMarks : 50 , name : "A", City : "pune", isActive : true},
    {studentId : 2, gender : 'FeMale' , studentMarks : 40 , name : "B", City : "Mumbai", isActive : false},
    {studentId : 3, gender : 'Male' , studentMarks : 22 , name : "C", City : "Thane", isActive : false},
    {studentId : 4, gender : 'FeMale' , studentMarks : 55 , name : "D", City : "kolhapur", isActive : true},
    {studentId : 5, gender : 'Male' , studentMarks : 98 , name : "E", City : "goa", isActive : true}
  ]

  customStyle : any = {
    'background-color ': 'red',
    'height ': '300px',
    'width ': '300px',
    'border-radius ': '50%',
    'display ': 'flex',
    'justify-content ': 'center',
    'align-items ': 'center',
    'color ': 'blue',

  }


  


}
