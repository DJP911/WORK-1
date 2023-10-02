import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OptionComponent } from './option/option.component';
import { Option1Component } from './option1/option1.component';
import { ChildaComponent } from './childa/childa.component';
import { ChildbComponent } from './childb/childb.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { ChildcComponent } from './childc/childc.component';
import { ChilddComponent } from './childd/childd.component';
import { BindingComponent } from './binding/binding.component';
import { TableviewComponent } from './tableview/tableview.component';

@NgModule({
  declarations: [
    AppComponent,
    OptionComponent,
    Option1Component,
    ChildaComponent,
    ChildbComponent,
    TwoWayBindingComponent,
    ChildcComponent,
    ChilddComponent,
    BindingComponent,
    TableviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
