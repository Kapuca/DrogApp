import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpozoriloComponent } from './opozorilo.component';

describe('OpozoriloComponent', () => {
  let component: OpozoriloComponent;
  let fixture: ComponentFixture<OpozoriloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpozoriloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpozoriloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
