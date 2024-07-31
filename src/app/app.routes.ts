import { Routes } from '@angular/router';
import { AttributeDirectiveComponent } from './component/attribute-directive/attribute-directive/attribute-directive.component';
import { StructuralDirectiveComponent } from './component/structural-directive/structural-directive/structural-directive.component';
import { DataBindingComponent } from './component/data-binding/data-binding.component';
import { IfelseComponent } from './component/controlflow/ifelse/ifelse/ifelse.component';
import { ForComponent } from './component/controlflow/for/for/for.component';
import { SwitchComponent } from './component/controlflow/switch/switch/switch.component';
import { PipeComponent } from './component/pipes/pipe/pipe.component';
import { TemplateComponent } from './component/forms/template/template/template.component';
import { ReactiveComponent } from './component/forms/reactive/reactive/reactive.component';
import { GetApiComponent } from './component/api/getApi/get-api/get-api.component';

export const routes: Routes = [
    {
        path : 'directive-attribute',
        component : AttributeDirectiveComponent
    },
    {
        path : 'directive-structural',
        component : StructuralDirectiveComponent
    },
    {
        path : 'data-binding',
        component : DataBindingComponent
    },
    {
        path : 'ifelse',
        component : IfelseComponent
    },
    {
        path : 'for',
        component : ForComponent
    },
    {
        path : 'switch',
        component : SwitchComponent
    },
    {
        path : 'pipe',
        component : PipeComponent
    },
    
    {
        path : 'templateForm',
        component : TemplateComponent
    },
    {
        path : 'reactiveForm',
        component : ReactiveComponent
    },
    {
        path : 'getApi',
        component : GetApiComponent
    }
];
