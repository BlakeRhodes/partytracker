import {Injectable} from '@angular/core';
import {Character} from '../models/character';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private behaviorSubject: BehaviorSubject<Character[]> = new BehaviorSubject<Character[]>([]);
  private characters: Character[] = [];

  constructor() {
  }

  getCharacters(): BehaviorSubject<Character[]> {
    return this.behaviorSubject;
  }

  add(character: Character) {
    this.characters.push(character);
    this.behaviorSubject.next(this.characters);
  }

  remove(i: number) {
    this.characters.splice(i, 1);
    this.behaviorSubject.next(this.characters);
  }
}
