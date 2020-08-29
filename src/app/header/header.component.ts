import {Component, OnInit} from '@angular/core';
import {CharacterService} from '../services/character.service';
import {Character} from '../models/character';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
  ) {
  }

  ngOnInit(): void {
  }
}

