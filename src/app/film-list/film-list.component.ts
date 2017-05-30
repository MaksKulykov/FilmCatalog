import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';

@Component({
  moduleId: module.id,
  selector: 'film-list',
  templateUrl: 'film-list.component.html',
  styleUrls: ['film-list.component.css']
})
export class FilmListComponent implements OnInit {
  filmList: Object[] = [];
  filmName: string;
  pageNumber: string;
  viewRequired: number;
  rowHeightRequired: string;
  constructor(private filmListService: FilmService) { }

  ngOnInit() {
    this.filmName = "lord";
    this.pageNumber = "1";
    this.viewRequired = 1;
    this.rowHeightRequired = "1000px";
    this.selectView(this.viewRequired);
    this.getFilms(this.filmName);
  }

  private getFilms(filmName: string): void {
    if(filmName) {
      this.filmListService.getFilms(filmName, this.pageNumber)
        .subscribe(
          (films: Object[]) => {
            if (films && films.length) {
              this.filmList = this.filmList.concat(films);
            }
          },
          (error: any) => {
            console.log(error);
          }
        );
    }
  }

  getNewFilms(filmName: string): void {
    this.filmName = filmName;
    this.pageNumber = "1";
    this.filmList = [];
    this.getFilms(this.filmName)
  }

  validateFilmName(filmName: string): void {
    if (this.filmName === filmName) {
      this.getFilms(this.filmName);
    } else {
      this.getNewFilms(filmName);
    }
  }

  addMoreFilms(): void {
    this.pageNumber = String(parseInt(this.pageNumber) + 1);
    this.getFilms(this.filmName);
  }

  selectView(view: number): void {
    this.viewRequired = view;
    this.setRowHeight(view);
  }

  setRowHeight(view: number): void {
    view === 1 ? this.rowHeightRequired = "1000px" : this.rowHeightRequired = "450px";
  }
}

