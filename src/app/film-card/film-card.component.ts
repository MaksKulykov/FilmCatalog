import { Component, OnInit } from '@angular/core';
import { FilmCardService } from './film-card.service';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent implements OnInit {
  filmList: Object[] = [];
  filmName: string;
  pageNumber: string;
  constructor(private filmCardService: FilmCardService) { }

  ngOnInit() {
    this.filmName = "Matrix";
    this.pageNumber = "1";
    this.getFilms();
  }

  private getFilms(): void {
    if(this.filmName) {
      this.filmCardService.getFilms(this.filmName, this.pageNumber)
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

