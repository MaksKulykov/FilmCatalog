import {Component, Output, EventEmitter, OnInit} from '@angular/core';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import {FormControl} from "@angular/forms";
import { MockFilmService } from '../mock-film.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [MockFilmService]
})
export class SearchComponent implements OnInit {
  filmName: string;
  @Output()
  getFilms = new EventEmitter<string>();
  filmCtrl: FormControl;
  filteredFilms: any;
  films: string[] = [];

  constructor(private mockFilmService: MockFilmService) { }

  ngOnInit() {
    this.filmCtrl = new FormControl();
    this.getMockFilms();
    this.filteredFilms = this.filmCtrl.valueChanges
      .startWith(null)
      .map(filmName => this.filter(filmName));
  }

  getMockFilms(): void {
    this.mockFilmService.getMockFilms().then(films => this.films = films);
  }

  filter(filmName: string): string[] {
    return filmName ? this.films.filter(option => new RegExp(`^${filmName}`, 'gi').test(option)): this.films;
  }

  getNewFilms(): void {
    this.getFilms.emit(this.filmName);
  }
}
