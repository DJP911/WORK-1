import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-childb',
  templateUrl: './childb.component.html',
  styleUrls: ['./childb.component.css']
})
export class ChildbComponent implements OnInit , DoCheck{
  ngDoCheck() {
    console.log('ngDoCheck triggered child b');
  }
  ngOnInit() {
    console.log('ngOnInit from the child   b component');
 }
}
