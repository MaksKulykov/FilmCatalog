import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  filmName: string;
  view: number;

  constructor() { }

  @Output()
  getFilms = new EventEmitter<string>();

  getNewFilms(filmName: string): void {
    this.getFilms.emit(filmName);
  }

  @Output()
  selectView = new EventEmitter<number>();

  selectNewView(): void {
    this.selectView.emit(this.view);
  }

}
