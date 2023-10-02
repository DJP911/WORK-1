import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-option1',
  templateUrl: './option1.component.html',
  styleUrls: ['./option1.component.css']
})

export class Option1Component implements OnChanges , OnInit {
  @Input() userName = '';

// ngOnInit() {
//     console.log('ngOnInit from the parent component');
//  }
  ngOnChanges(changes:SimpleChanges) {
    console.log('ngOnChanges triggered Option 1', changes);
 }
 ngOnInit() {
  console.log('ngOnInit from the parent component option 1');
}
}