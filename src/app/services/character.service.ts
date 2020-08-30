import {Injectable} from '@angular/core';
import {Character} from '../models/character';
import {BehaviorSubject} from 'rxjs';
import {safeLog} from '../functions';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private behaviorSubject = new BehaviorSubject<Map<number, Character>>(new Map());
  private readonly characters: Map<number, Character>;

  constructor() {
    this.characters = new Map(JSON.parse(localStorage.getItem('characters')));
    this.behaviorSubject.next(this.characters);
  }

  getCharacters(): BehaviorSubject<Map<number, Character>> {
    return this.behaviorSubject;
  }

  add(index: number, character: Character) {
    this.characters.set(index, character);
    this.update();
    safeLog('add', this.characters);
  }

  remove(i: number) {
    this.characters.delete(i);
    this.update();
    safeLog('remove', this.characters);
  }

  private update() {
    this.behaviorSubject.next(this.characters);
    safeLog(JSON.stringify(this.characters));
    localStorage.setItem('characters', JSON.stringify(Array.from(this.characters.entries())));
  }
}
