import { Component, OnInit, Input } from '@angular/core';
import {FilmService} from '../film.service'

@Component({
  selector: 'film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent implements OnInit {
  @Input()
  filmId: string;
  @Input()
  view: number;
  filmItem: Object[] = [];
  constructor(private filmCardService: FilmService) { }

  ngOnInit() {
    if(this.filmId) {
      this.filmCardService.getFilmById(this.filmId)
        .subscribe(
          (filmDetails: Object[]) => {
            if(filmDetails){
              this.filmItem = filmDetails;
            }
          },
          (error: any) => {
            console.log(error);
          }
        );
    }
  }

}


