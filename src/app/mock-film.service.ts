import { Injectable } from '@angular/core';
import { FILMS } from './mock-films';

@Injectable()
export class MockFilmService {
  getMockFilms(): Promise<string[]> {
    return Promise.resolve(FILMS);
  }
}
