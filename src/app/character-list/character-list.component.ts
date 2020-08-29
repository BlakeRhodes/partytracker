import {Component, OnDestroy, OnInit} from '@angular/core';
import {Character} from '../models/character';
import {CharacterService} from '../services/character.service';
import {Subscription} from 'rxjs';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit, OnDestroy {
  characters = [];
  subscription: Subscription;
  form: FormGroup;

  constructor(
    private characterService: CharacterService,
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.subscription = this.characterService.getCharacters().subscribe(values => this.characters = values);
    this.form = this.formBuilder.group({
      name: [],
      insight: [],
      perception: [],
      investigation: [],
      str: [],
      dex: [],
      con: [],
      int: [],
      wis: [],
      cha: [],
      ac: [],
    });
  }

  handleClick() {
    this.characterService.add(
      new Character({
        name: this.name.value,
        insight: this.insight.value + 10,
        perception: this.perception.value + 10,
        investigation: this.investigation.value + 10,
        str: this.str.value,
        dex: this.dex.value,
        con: this.con.value,
        int: this.int.value,
        wis: this.wis.value,
        cha: this.cha.value,
        ac: this.ac.value,
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  handleClosed(i: number) {
    this.characterService.remove(i);
  }

  get name() {
    return this.form.get('name');
  }

  get insight() {
    return this.form.get('insight');
  }

  get perception() {
    return this.form.get('perception');
  }

  get investigation() {
    return this.form.get('investigation');
  }

  get str() {
    return this.form.get('str');
  }

  get dex() {
    return this.form.get('dex');
  }

  get con() {
    return this.form.get('con');
  }

  get int() {
    return this.form.get('int');
  }

  get wis() {
    return this.form.get('wis');
  }

  get cha() {
    return this.form.get('cha');
  }

  get ac() {
    return this.form.get('ac');
  }
}
