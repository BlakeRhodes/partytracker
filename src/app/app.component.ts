import { Component } from '@angular/core';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'party-tracker';
  eventSubject = new Subject<void>();

  handleRoll() {
    this.eventSubject.next();
  }
}
