import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CharacterCardComponent} from './character-card.component';
import {By} from '@angular/platform-browser';
import {buildCharacter} from '../models/character';
import {MatCardModule} from '@angular/material/card';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('CharacterCardComponent', () => {
  let component: CharacterCardComponent;
  let fixture: ComponentFixture<CharacterCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule],
      declarations: [
        CharacterCardComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  [
    {property: 'name', expected: 'Frank', value: 'Frank'},
    {property: 'name', expected: 'Kitty', value: 'Kitty'},
    {property: 'passiveInsight', expected: '1', value: 1},
    {property: 'passiveInsight', expected: '2', value: 2},
    {property: 'str', expected: '2', value: 2},
    {property: 'str', expected: '1', value: 1},
    {property: 'dex', expected: '3', value: 3},
    {property: 'dex', expected: '2', value: 2},
    {property: 'con', expected: '4', value: 4},
    {property: 'con', expected: '3', value: 3},
    {property: 'int', expected: '5', value: 5},
    {property: 'int', expected: '4', value: 4},
    {property: 'wis', expected: '6', value: 6},
    {property: 'wis', expected: '5', value: 5},
    {property: 'cha', expected: '7', value: 7},
    {property: 'cha', expected: '6', value: 6},
    {property: 'ac', expected: '8', value: 8},
    {property: 'ac', expected: '7', value: 7},
  ].forEach(testCase => {
    it(`should display ${testCase.property} of hero`, () => {
      const testCharacter = buildCharacter();
      testCharacter[`${testCase.property}`] = testCase.value;
      component.character = testCharacter;
      fixture.detectChanges();

      const value = fixture.debugElement.query(By.css(`[${testCase.property}]`)).nativeElement.textContent;

      expect(value).toContain(testCase.expected);
    });
  });
});
