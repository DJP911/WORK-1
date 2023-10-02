import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
  styleUrls: ['./app.component.css']
})

export class AppComponent   {

  title = 'demo1';
  userName = 'Darshan';
  updateUser(){
    this.userName = 'DJP119';
  }

  isChildDestroyed = false;
  
  destroy() {
    this.isChildDestroyed = true;
 }

 modelValue: string = 'Hello World';

//  to see Binding 
 isBind = false;
 bind(){
  this.isBind = !this.isBind;
 }

 istable = false;
 tableshow(){
  this.istable = !this.istable;
 }

}
