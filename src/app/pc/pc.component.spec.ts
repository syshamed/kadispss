/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PCComponent } from './pc.component';

describe('PCComponent', () => {
  let component: PCComponent;
  let fixture: ComponentFixture<PCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
