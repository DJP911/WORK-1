import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildaComponent } from './childa/childa.component';
import { ChildbComponent } from './childb/childb.component';
import {ChildcComponent} from './childc/childc.component';
import {ChilddComponent} from './childd/childd.component';

import {OptionComponent} from './option/option.component'
import {Option1Component} from "./option1/option1.component";


const routes: Routes = [
  {
    path: 'option',
    component: OptionComponent,
    children: [
      { path: 'child-a', component: ChildaComponent },
      { path: 'child-b', component: ChildbComponent }
    ]
  },
  { path: 'option1', component: Option1Component ,
  children:[
    {path : 'child-c',component: ChildcComponent},
    {path: 'child-d',component:ChilddComponent}
  ]
},
  
  {
    path: 'admin', 
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  

}
