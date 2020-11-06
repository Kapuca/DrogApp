import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZapletiViewComponent } from './zapleti-view.component';

describe('ZapletiViewComponent', () => {
  let component: ZapletiViewComponent;
  let fixture: ComponentFixture<ZapletiViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZapletiViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZapletiViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
