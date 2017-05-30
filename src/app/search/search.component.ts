import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  filmName: string;
  view: number;
  @Output()
  getFilms = new EventEmitter<string>();
  @Output()
  selectView = new EventEmitter<number>();

  constructor() { }

  getNewFilms(): void {
    this.getFilms.emit(this.filmName);
  }

  selectNewView(): void {
    this.selectView.emit(this.view);
  }

}
