import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  filmName: string;

  constructor() { }

  @Output() getFilms = new EventEmitter<string>();

  getNewFilms(filmName: string): void {
    this.getFilms.emit(filmName);
  }

}
