import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnofiComponent } from './knofi.component';

describe('KnofiComponent', () => {
  let component: KnofiComponent;
  let fixture: ComponentFixture<KnofiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnofiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnofiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
