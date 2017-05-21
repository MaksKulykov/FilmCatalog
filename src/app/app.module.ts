import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { AppComponent } from './app.component';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmListService } from './film-list/film-list.service';

@NgModule({
  declarations: [
    AppComponent,
    FilmListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [FilmListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
