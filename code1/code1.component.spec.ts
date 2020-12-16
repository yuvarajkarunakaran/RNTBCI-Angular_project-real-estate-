import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Code1Component } from './code1.component';

describe('Code1Component', () => {
  let component: Code1Component;
  let fixture: ComponentFixture<Code1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Code1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Code1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
