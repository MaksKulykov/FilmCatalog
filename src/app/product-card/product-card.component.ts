import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  products: Object[];
  index: number = 0;

  constructor() { }

  ngOnInit() {
    this.products = [
      {name: "Nikon", description: "Описание к фотоапарату Никон", url: "http://desktopwallpapers.org.ua/large/201702/56308.jpg"},
      {name: "Текстура", description: "Описание к Текстуре", url: "http://desktopwallpapers.org.ua/large/201702/56309.jpg"},
      {name: "Архитектура", description: "Очень необычный дом", url: "http://desktopwallpapers.org.ua/large/201702/56311.jpg"},
      {name: "Природа", description: "Картина весны", url: "http://desktopwallpapers.org.ua/large/201702/56313.jpg"},
      {name: "Космос", description: "Обнаружена черная дыра", url: "http://desktopwallpapers.org.ua/large/201702/56314.jpg"}
    ];
  }

  showNext() {
    if (this.index != this.products.length-1){
      this.index++;
    }
  }

  showPrev() {
    if (this.index != 0){
      this.index--;
    }
  }

}
