import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component} from '@angular/core';
import { interval, map, Observable } from 'rxjs';
import { NaPipe } from './na.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [
    AsyncPipe,
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    DatePipe,
    JsonPipe,
    NaPipe
  ],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

  firstName : string  = "angular is best then react"; 

  currentDate : Date = new Date();

  currentTime : Observable<Date> = new Observable<Date>;


  student : any = {
    name : 'atish',
    company : 'GladOwl Pvt LTD',
    empId : '1239477',
    state : ''
  }
  
  constructor()
  {
    this.currentTime = interval(1000).pipe
    (
      map
      (
        () => new Date()
      )
    );
  }
}

