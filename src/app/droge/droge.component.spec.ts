import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrogeComponent } from './droge.component';

describe('DrogeComponent', () => {
  let component: DrogeComponent;
  let fixture: ComponentFixture<DrogeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrogeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
