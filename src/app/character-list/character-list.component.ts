import {Component, OnDestroy, OnInit} from '@angular/core';
import {buildCharacter} from '../models/character';
import {CharacterService} from '../services/character.service';
import {Subscription} from 'rxjs';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit, OnDestroy {
  characters = [];
  subscription: Subscription;

  constructor(private characterService: CharacterService) {
  }

  ngOnInit(): void {
    this.subscription = this.characterService.getCharacters().subscribe(values => this.characters = values);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  handleClosed(i: number) {
    this.characterService.remove(i);
  }
}
