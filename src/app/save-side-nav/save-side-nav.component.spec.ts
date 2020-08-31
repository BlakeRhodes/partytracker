import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveSideNavComponent } from './save-side-nav.component';

describe('SaveSideNavComponent', () => {
  let component: SaveSideNavComponent;
  let fixture: ComponentFixture<SaveSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
