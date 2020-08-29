import {Component, OnInit} from '@angular/core';
import {CharacterService} from '../services/character.service';
import {buildCharacter} from '../models/character';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private characterService: CharacterService) {
  }

  ngOnInit(): void {
  }

  handleClick() {
    this.characterService.add(buildCharacter());
  }
}
