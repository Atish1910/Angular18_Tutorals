import { Component,OnChanges, OnInit, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle-event',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle-event.component.html',
  styleUrl: './life-cycle-event.component.css'
})
export class LifeCycleEventComponent implements OnInit, OnChanges, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, OnDestroy  {

  firstName : string;
  constructor() 
  {
    // debugger
    console.log("constructor...");
    this.firstName = "";
  }
  ngOnInit(): void {
      console.log("ngOnInit")
  }
  
  ngOnChanges(changes: SimpleChanges): void {
      console.log("ngOnChanges");
  }

  ngAfterViewInit(): void {
      console.log("ngAfterViewInit")
  }

  ngAfterViewChecked(): void {
      console.log("ngAfterViewChecked")
  }

  ngAfterContentInit(): void {
      console.log("ngAfterContentInit")
  }

  ngAfterContentChecked(): void {
      console.log("ngAfterContentChecked")
  }

  ngOnDestroy(): void {
      console.log("ngOnDestroy")
  }
}
