import {Component, OnInit} from '@angular/core';
import {Character} from '../models/character';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CharacterService} from '../services/character.service';
import {emojiName} from '../functions';
import {SNACKBAR_CONFIG} from '../constants';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-character-form',
  templateUrl: './add-character-form.component.html',
  styleUrls: ['./add-character-form.component.scss']
})
export class AddCharacterFormComponent implements OnInit {
  idCounter = 0;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private characterService: CharacterService,
    private snackBar: MatSnackBar,
  ) {
  }

  ngOnInit(): void {
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
      inint: [],
    });
  }

  handleClick() {
    this.characterService.add(
      this.idCounter,
      new Character({
        name: this.name.value,
        insight: +this.insight.value + 10,
        perception: +this.perception.value + 10,
        investigation: +this.investigation.value + 10,
        str: this.str.value,
        dex: this.dex.value,
        con: this.con.value,
        int: this.int.value,
        wis: this.wis.value,
        cha: this.cha.value,
        ac: this.ac.value,
        id: this.idCounter,
        inint: this.inint.value,
      })
    );
    this.idCounter++;
    this.openSnackBar(this.name.value);
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

  get inint() {
    return this.form.get('inint');
  }

  openSnackBar(name: string) {
    this.snackBar.open(
      emojiName(
        this.name.value,
        'joined the party!'
      ),
      'HAIL!',
      SNACKBAR_CONFIG);
  }
}
