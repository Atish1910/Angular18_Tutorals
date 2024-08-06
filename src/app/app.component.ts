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
import { PostApiComponent } from './component/api/postApi/post-api/post-api.component';
import { ApiCallByServiceComponent } from './component/service/api-call-by-service/api-call-by-service.component';
import { LifeCycleEventComponent } from './component/lifeCycleEvent/life-cycle-event/life-cycle-event.component';

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
    TemplateComponent,
    PostApiComponent,
    ApiCallByServiceComponent,
    LifeCycleEventComponent,
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
    {name: "post Api", routerLink : "postApi"},
    {name: "Service", routerLink : "service"},
    {name: "life Cycle Event", routerLink : "lifecycleevent"},
    {name: "Ng Template", routerLink : "ngtemplate"},
    {name: "Ng Container", routerLink : "ngContainer"},
    {name: "View Child", routerLink : "viewchild"}
  ]


}
