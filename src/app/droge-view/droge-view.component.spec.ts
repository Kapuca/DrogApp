import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrogeViewComponent } from './droge-view.component';

describe('DrogeViewComponent', () => {
  let component: DrogeViewComponent;
  let fixture: ComponentFixture<DrogeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrogeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrogeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
