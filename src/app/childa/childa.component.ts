import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-childa',
  templateUrl: './childa.component.html',
  styleUrls: ['./childa.component.css']
})
export class ChildaComponent implements OnInit,DoCheck{
  
  ngDoCheck() {
    console.log('ngDoCheck triggered child  a');
  }
  ngOnInit() {
    console.log('ngOnInit from the child  a component');
 }
}
