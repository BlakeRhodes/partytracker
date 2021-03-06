import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {MatCardModule} from '@angular/material/card';
import { CharacterCardComponent } from './character-card/character-card.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { FooterComponent } from './footer/footer.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {CharacterService} from './services/character.service';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AddCharacterFormComponent } from './add-character-form/add-character-form.component';
import { SideNavToggleComponent } from './side-nav-toggle/side-nav-toggle.component';
import { InitiativeComponent } from './initiative/initiative.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CharacterCardComponent,
    CharacterListComponent,
    FooterComponent,
    AddCharacterFormComponent,
    SideNavToggleComponent,
    InitiativeComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        DragDropModule,
        MatSidenavModule,
        MatSnackBarModule,
    ],
  providers: [CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
