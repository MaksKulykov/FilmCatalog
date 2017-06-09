import { Component, Renderer } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Мой каталог фильмов';

  links = [
    { path: '/dashboard', icon: 'home', label: 'Главная'},
    { path: '/filmList', icon: 'theaters', label: 'Все фильмы'},
    { path: '/profile', icon: 'person', label: 'Профиль'}
  ];

  constructor(private renderer: Renderer) {
    this.renderer.listenGlobal('window', 'scroll', (evt) => {this.scrollFunction();} );
  }

  scrollFunction(): void {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("btnTop").style.display = "block";
    } else {
      document.getElementById("btnTop").style.display = "none";
    }
  }

  topFunction(): void {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
  }
}

