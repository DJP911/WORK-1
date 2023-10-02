import { Component, Input, OnChanges, OnInit, AfterContentInit, SimpleChanges, ViewChild, ElementRef, ContentChild, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnChanges, OnInit  {
  @Input() userName = '';


  ngOnInit() {
    console.log('ngOnInit from the parent component option 0');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges triggered option 0', changes);
  }


  // @ViewChild('wrapper') wrapper!: ElementRef;
  // @ContentChild('contentWrapper') content!: ElementRef;


  // ngAfterContentInit() {
    // console.log('ngAfterContentInit - wrapper', this.wrapper);
    // console.log('ngAfterContentInit - contentWrapper', this.content);
  // }
  // ngAfterContentChecked():void{
      // console.log('ngAfterContent Checked Parent component');
  // }
  

  // @Input() delete1='';

  // isChildDestroyed = false;
  // destroy(){
  //   this.isChildDestroyed = true;
  // }

  // modelValue = 'Hello World';
  
}
