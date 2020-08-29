import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {buildCharacter, Character} from '../models/character';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {
  @Input() character: Character = buildCharacter();
  @Output() closed: EventEmitter<null> = new EventEmitter<null>();
  @Output() dropped: EventEmitter<CdkDragDrop<any>> = new EventEmitter<CdkDragDrop<any>>();

  constructor() {
  }

  ngOnInit(): void {
  }

  handleClick() {
    this.closed.emit();
  }

  formatBonus(value: number): string {
    const bonus = value === null ? 0 : value;
    return `${value < 0 ? value : '+' + bonus}`;
  }
}
