import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-ifelse',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ifelse.component.html',
  styleUrl: './ifelse.component.css'
})
export class IfelseComponent {

  isMyDiv1Visible : boolean = true;
  isMyDiv2Visible : boolean = false;

  num1 : string = '';
  num2 : string = '';

  selectStatus : string = '';

  showDiv1(){
    this.isMyDiv1Visible = true;
  }
  hideDiv1(){
    this.isMyDiv1Visible = false;
  }
  
  toggleDiv2(){
    this.isMyDiv2Visible = !this.isMyDiv2Visible;
  }

}
