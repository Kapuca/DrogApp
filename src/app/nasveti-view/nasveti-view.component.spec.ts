import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NasvetiViewComponent } from './nasveti-view.component';

describe('NasvetiViewComponent', () => {
  let component: NasvetiViewComponent;
  let fixture: ComponentFixture<NasvetiViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NasvetiViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NasvetiViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
