import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { constant } from '../constant/constant';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


///////////////////////////////////////////////////////////////////////////////
  // below is code for login with static value
  // userObj : any = {
  //   user :'',
  //   pass : ''
  // }

  // router = inject(Router);


  // onLogin(){
  //   if(this.userObj.user == 'admin' && this.userObj.pass == '1234')
  //   {
  //     debugger
  //     alert('login successful');
  //     localStorage.setItem('loinuser',this.userObj.user)
  //     this.router.navigateByUrl('templateForm')
  //   }
  //   else
  //   {
  //     alert("You Entered Wrong Id Password")
  //   }
  // }
  ///////////////////////////////////////////////////////////////////////////////


  // now we are login with api 
  
  userObj: any = {
    EmailId:'',
    Password:''
  };

  router =  inject(Router);
  http = inject(HttpClient)

  onLogin(){
    // debugger;
    this.http.post("https://projectapi.gerasim.in/api/UserApp/login", this.userObj).subscribe((res:any)=>{
      if(res.result) {
        alert("login Success");
        localStorage.setItem('loinuser', JSON.stringify(res.data) )
        this.router.navigateByUrl(constant.FORM_TABS.REACTIVE)
      } else {
        alert(res.message)
      }
    })
  }


}
