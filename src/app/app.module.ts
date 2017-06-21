import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule, MdAutocompleteModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { AppComponent } from './app.component';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmCardComponent } from './film-card/film-card.component';
import { FilmService } from './film.service';
import { SearchComponent } from './search/search.component';
import { SelectViewComponent } from './select-view/select-view.component';
import { ScrollDirective } from './scroll-directive';
import { GoTopComponent } from './go-top/go-top.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmListComponent,
    FilmCardComponent,
    SearchComponent,
    SelectViewComponent,
    ScrollDirective,
    GoTopComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    MdAutocompleteModule,
    BrowserAnimationsModule
  ],
  providers: [FilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
