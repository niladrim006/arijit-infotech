import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanPendingListComponent } from './pan-pending-list.component';

describe('PanPendingListComponent', () => {
  let component: PanPendingListComponent;
  let fixture: ComponentFixture<PanPendingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanPendingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanPendingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
