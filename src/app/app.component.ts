import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DataBindingComponent } from './component/data-binding/data-binding.component';
import { AttributeDirectiveComponent } from './component/attribute-directive/attribute-directive/attribute-directive.component';
import { StructuralDirectiveComponent } from './component/structural-directive/structural-directive/structural-directive.component';
import { IfelseComponent } from './component/controlflow/ifelse/ifelse/ifelse.component';
import { ForComponent } from './component/controlflow/for/for/for.component';
import { SwitchComponent } from './component/controlflow/switch/switch/switch.component';
import { PipeComponent } from './component/pipes/pipe/pipe.component';
import { TemplateComponent } from './component/forms/template/template/template.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
    RouterOutlet,
    DataBindingComponent,
    StructuralDirectiveComponent,
    AttributeDirectiveComponent,
    RouterLink,
    IfelseComponent,
    ForComponent,
    SwitchComponent,
    PipeComponent,
    TemplateComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dataBinding ';

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
  ]


}
