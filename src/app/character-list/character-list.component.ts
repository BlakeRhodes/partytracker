import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CharacterService} from '../services/character.service';
import {Observable, Subscription} from 'rxjs';
import {safeLog} from '../functions';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit, OnDestroy {
  @Input() rolledEvent = new Observable<void>();
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
    this.subscriptions.push(
      this.rolledEvent.subscribe(() => this.showInitTracker = true));
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
}
