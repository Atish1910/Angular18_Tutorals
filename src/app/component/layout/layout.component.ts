import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  isDivVisible : boolean = false;

  
  navlist : any [] = [
    {name: "Directive  attribute", routerLink : "directive-attribute"},
    {name: "Directive structural", routerLink : "directive-structural"},
    {name: "Data binding", routerLink : "data-binding"},
    {name: "Ifelse", routerLink : "ifelse"},
    {name: "For", routerLink : "for"},
    {name: "Switch", routerLink : "switch"},
    {name: "Pipe", routerLink : "pipe"},
    {name: "TemplateForm", routerLink : "templateForm"},
    {name: "ReactiveForm", routerLink : "reactiveForm"},
    {name: "get Api", routerLink : "getApi"},
    {name: "post Api", routerLink : "postApi"},
    {name: "Service", routerLink : "service"},
    {name: "life Cycle Event", routerLink : "lifecycleevent"},
    {name: "Ng Template", routerLink : "ngtemplate"},
    {name: "Ng Container", routerLink : "ngContainer"},
    {name: "View Child", routerLink : "viewchild"}
  ]
  
  router = inject(Router);

  logout(){
    localStorage.removeItem('loinuser');
    this.router.navigateByUrl('login');
  }
}
