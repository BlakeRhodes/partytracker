import {Component, Input, OnInit} from '@angular/core';
import {buildCharacter, Character} from '../models/character';
@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {
  @Input() character: Character = buildCharacter();

  constructor() {
  }

  ngOnInit(): void {
  }

}
