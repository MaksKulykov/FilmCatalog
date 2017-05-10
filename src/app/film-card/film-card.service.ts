import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class FilmCardService {
  private url: string = "http://www.omdbapi.com/";
  constructor(private http: Http) { }

  private extractData(res: Response): Array<any> {
    let body = res.json();
    return body.Search || {};
  }

  getFilms(filmName: string): Observable<any> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('page', '1'.toString());
    params.set('s', filmName.toString());
    return this.http.get(this.url, {search: params}).map(this.extractData);
  }
}
