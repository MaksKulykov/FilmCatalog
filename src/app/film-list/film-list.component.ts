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
  constructor(private filmListService: FilmService) { }

  ngOnInit() {
    this.filmName = "lord";
    this.pageNumber = "1";
    this.getFilms();
  }

  private getFilms(): void {
    if(this.filmName) {
      this.filmListService.getFilms(this.filmName, this.pageNumber)
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
}

