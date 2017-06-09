import {Component, Output, EventEmitter, OnInit} from '@angular/core';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  filmName: string;
  @Output()
  getFilms = new EventEmitter<string>();
  filmCtrl: FormControl;
  filteredFilms: any;
  films = [
    'Matrix',
    'The Lord of the Rings',
    'The Man Called Flintstone',
    'Casper the Friendly Ghost',
    'Peppa Pig',
    'Groundhog Day',
    'The Lake House',
    'The Terminal',
    'Miracle on 34th Street',
    'Harry Potter and the Sorcerer’s Stone',
    'Harry Potter and the Chamber of Secrets',
    'Pulp Fiction'
  ];

  ngOnInit() {
    this.filmCtrl = new FormControl();

    this.filteredFilms = this.filmCtrl.valueChanges
      .startWith(null)
      .map(name => this.filter(name));
  }

  filter(val: string): string[] {
    return val ? this.films.filter(option => new RegExp(`^${val}`, 'gi').test(option)): this.films;
  }

  getNewFilms(): void {
    this.getFilms.emit(this.filmName);
  }
}
