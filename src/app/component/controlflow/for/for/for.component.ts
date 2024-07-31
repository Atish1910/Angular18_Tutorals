import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-for',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export class ForComponent {


  ///////////////////////For//////////////////////////////

    CityArray : string [] = ['Pune','Mumbai','Thane','Nashik','Kolhapur'];


    studentlist : any [] = [
      {studentId : 1, name : "A", City : "pune", isActive : true},
      {studentId : 2, name : "B", City : "Mumbai", isActive : true},
      {studentId : 3, name : "C", City : "Thane", isActive : true},
      {studentId : 4, name : "D", City : "kolhapur", isActive : true},
      {studentId : 5, name : "E", City : "goa", isActive : true}
    ]

}
