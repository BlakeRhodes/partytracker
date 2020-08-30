import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddCharacterFormComponent} from './add-character-form.component';
import {CharacterService} from '../services/character.service';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('AddCharacterFormComponent', () => {
  let component: AddCharacterFormComponent;
  let fixture: ComponentFixture<AddCharacterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddCharacterFormComponent],
      providers: [
        FormBuilder,
        MatSnackBar,
        CharacterService,
      ],
      imports: [
        MatSnackBarModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCharacterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add character when button is clicked', () => {
    const spy = spyOn(TestBed.inject(CharacterService), 'add');

    component.handleClick();

    expect(spy).toHaveBeenCalled();
  });
});
