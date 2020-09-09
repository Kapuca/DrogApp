import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpozorilaComponent } from './opozorila.component';

describe('OpozorilaComponent', () => {
  let component: OpozorilaComponent;
  let fixture: ComponentFixture<OpozorilaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpozorilaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpozorilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
