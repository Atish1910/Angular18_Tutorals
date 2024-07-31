import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

// data binding
  myName : string = "Atishhhh"
  MyContact : number = 8888428371;
  myMailId : any = "atishkamble398@gmail.com";

  // Property Binding

  MyColor : string = "text-success py-5 border rounded-3 h1"


  // Strimg No Boolean data

  CourseName: string = "Angular 18";

  rollNo : number= 123;

  inputType = "radio";
  inputType2 = "checkbox";

  isIndian : boolean = true;

  currentDate : Date = new Date();

  City : string = "Goa";


    //Property Binding
    myClassName : string = "bg-primary border py-5";



    constructor()
    {
      
    }
  
  // event Binding

  ChangeMyName(){
    this.myName = "Ashishhhhh";
    this.CourseName = "React Js";
    this.HereIsMyName.set ("Sachin 10DulKars")
  }

  myEvent(message : string)
  {
    alert(message);
  }

  HereIsMyName =  signal("Atishhh Vinayak Kamble");

  




}
