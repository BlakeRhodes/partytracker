import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CharacterListComponent} from './character-list.component';
import {By} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {buildCharacter} from '../models/character';
import {CharacterService} from '../services/character.service';

describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CharacterListComponent,
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a card for each character', () => {
    component.characters = [
      buildCharacter(),
      buildCharacter(),
      buildCharacter(),
      buildCharacter()
    ];
    fixture.detectChanges();

    const result = fixture.debugElement.queryAll(By.css('app-character-card')).length;

    expect(result).toEqual(4);

  });

  it('should delete character when button is clicked', () => {
    const spy = spyOn(TestBed.inject(CharacterService), 'remove');
    component.characters = [buildCharacter()];

    component.handleClosed(1);

    expect(spy).toHaveBeenCalledWith(1);
  });
});
