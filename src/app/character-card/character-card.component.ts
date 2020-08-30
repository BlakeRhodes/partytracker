import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {buildCharacter, Character} from '../models/character';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
import {MatSnackBar} from '@angular/material/snack-bar';
import {SNACKBAR_CONFIG} from '../constants';
import {emojiName} from '../functions';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {
  @Input() character: Character = buildCharacter();
  @Output() closed: EventEmitter<null> = new EventEmitter<null>();
  @Output() dropped: EventEmitter<CdkDragDrop<any>> = new EventEmitter<CdkDragDrop<any>>();
  debug = !environment.production;

  constructor(
    private snackBar: MatSnackBar,
  ) {
  }

  ngOnInit(): void {
  }

  handleClick() {
    this.snackBar.open(
      emojiName(
        this.character.name,
        'has left the party!'
      ),
      'HAIL!',
      SNACKBAR_CONFIG
    );
    this.closed.emit();
  }

  formatBonus(value: number): string {
    const bonus = value === null ? 0 : value;
    return `${value < 0 ? value : '+' + bonus}`;
  }
}
