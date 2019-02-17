import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyPanComponent } from './apply-pan.component';

describe('ApplyPanComponent', () => {
  let component: ApplyPanComponent;
  let fixture: ComponentFixture<ApplyPanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyPanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyPanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
