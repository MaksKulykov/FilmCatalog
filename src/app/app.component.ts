import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  links = [
    { path: '/cards',  label: 'Карточки'},
    { path: '/list',  label: 'Список'},
  ];
}
