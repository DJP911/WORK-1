import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildcComponent } from './childc.component';

describe('ChildcComponent', () => {
  let component: ChildcComponent;
  let fixture: ComponentFixture<ChildcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildcComponent]
    });
    fixture = TestBed.createComponent(ChildcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
