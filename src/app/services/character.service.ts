import {Injectable} from '@angular/core';
import {Character} from '../models/character';
import {BehaviorSubject} from 'rxjs';
import {safeLog} from '../functions';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private behaviorSubject = new BehaviorSubject<Map<number, Character>>(new Map());
  private characters: Map<number, Character> = new Map();

  constructor() {
  }

  getCharacters(): BehaviorSubject<Map<number, Character>> {
    return this.behaviorSubject;
  }

  add(index: number, character: Character) {
    this.characters.set(index, character);
    this.behaviorSubject.next(this.characters);
    safeLog('test', this.characters);
  }

  remove(i: number) {
    this.characters.delete(i);
    this.behaviorSubject.next(this.characters);
    safeLog('test', this.characters);
  }
}
