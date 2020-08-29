import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CharacterListComponent} from './character-list.component';
import {By} from '@angular/platform-browser';
import {CharacterCardComponent} from '../character-card/character-card.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

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
    component.characters = [1, 1, 1, 1];
    fixture.detectChanges();

    const result = fixture.debugElement.queryAll(By.css('app-character-card')).length;

    expect(result).toEqual(4);

  });
});
