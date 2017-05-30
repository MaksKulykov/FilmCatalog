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
    this.rowHeightRequired = "800px";
    this.selectView(this.viewRequired);
    this.getFilms(this.filmName);
  }

  private getFilms(filmName: string): void {
    if(filmName) {
      this.filmListService.getFilms(filmName, this.pageNumber)
        .subscribe(
          (films: Object[]) => {
            if (films && films.length) {
              this.filmList = films;
            }
          },
          (error: any) => {
            console.log(error);
          }
        );
    }
  }

  selectView(view: number): void {
    console.log(view);
    this.viewRequired = view;
    this.setRowHeight(view);
  }

  setRowHeight(view: number): void {
    view === 1 ? this.rowHeightRequired = "800px" : this.rowHeightRequired = "450px";
  }
}

