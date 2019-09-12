import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemChangeComponent } from './system-change.component';

describe('SystemChangeComponent', () => {
  let component: SystemChangeComponent;
  let fixture: ComponentFixture<SystemChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
