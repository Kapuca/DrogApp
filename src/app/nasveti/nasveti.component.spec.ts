import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NasvetiComponent } from './nasveti.component';

describe('NasvetiComponent', () => {
  let component: NasvetiComponent;
  let fixture: ComponentFixture<NasvetiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NasvetiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NasvetiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
