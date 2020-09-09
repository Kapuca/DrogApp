import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZapletiComponent } from './zapleti.component';

describe('ZapletiComponent', () => {
  let component: ZapletiComponent;
  let fixture: ComponentFixture<ZapletiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZapletiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZapletiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
