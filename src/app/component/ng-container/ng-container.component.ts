import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-container.component.html',
  styleUrl: './ng-container.component.css'
})
export class NgContainerComponent {

  isContainer : boolean = false;

  http = inject(HttpClient);
  IsApiRunning : boolean = false;

  userlist : any[] = [];

  getuers(){
    this.IsApiRunning = true;
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res:any)=>{

      this.userlist = res;

      this.IsApiRunning = false;
      
    })
  }

}
