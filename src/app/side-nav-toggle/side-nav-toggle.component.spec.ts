import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SideNavToggleComponent} from './side-nav-toggle.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

describe('SideNavToggleComponent', () => {
  let component: SideNavToggleComponent;
  let fixture: ComponentFixture<SideNavToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SideNavToggleComponent],
      imports: [MatIconModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
