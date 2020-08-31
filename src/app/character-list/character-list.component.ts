import {Component, OnDestroy, OnInit} from '@angular/core';
import {CharacterService} from '../services/character.service';
import {Subscription} from 'rxjs';
import {safeLog} from '../functions';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit, OnDestroy {
  characters = [];
  subscriptions: Subscription[] = [];
  open = false;
  showInitTracker = false;

  constructor(
    private characterService: CharacterService,
  ) {
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.characterService.getCharacters()
        .subscribe(characters => {
          this.characters = Array.from(characters.values());
          safeLog('what i got from the sub', this.characters);
        })
    );
  }


  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  handleClosed(i: number) {
    safeLog('Tried to delete', i);
    this.characterService.remove(i);
  }

  handleDismissed() {
    this.showInitTracker = false;
  }

  handleRoll() {
    this.showInitTracker = !this.showInitTracker;
  }

  handleSave() {

  }
}
