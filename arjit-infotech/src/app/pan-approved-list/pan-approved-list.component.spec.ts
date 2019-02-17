import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanApprovedListComponent } from './pan-approved-list.component';

describe('PanApprovedListComponent', () => {
  let component: PanApprovedListComponent;
  let fixture: ComponentFixture<PanApprovedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanApprovedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanApprovedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
