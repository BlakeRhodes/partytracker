import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Character} from '../models/character';
import {Roll} from '../models/roll';

@Component({
  selector: 'app-initiative',
  templateUrl: './initiative.component.html',
  styleUrls: ['./initiative.component.scss']
})
export class InitiativeComponent implements OnInit {
  @Output() dismissed = new EventEmitter<void>();
  @Input() characters: Character[];
  rolls: Roll[] = [];

  private static randomNumber(max: number) {
    return Math.floor(Math.random() * max) + 1;
  }

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.characters);
    this.characters.forEach(character => {
      this.rolls.push(
        {
          name: character.name,
          value: character.inint + InitiativeComponent.randomNumber(20),
        }
      );
    });
    this.rolls.sort((a, b) => {
      return a.value < b.value ? 1 : a.value > b.value ? -1 : 0;
    });
  }


  handleClick() {
    this.dismissed.emit();
  }
}