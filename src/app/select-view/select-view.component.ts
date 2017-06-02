import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'select-view',
  templateUrl: './select-view.component.html',
  styleUrls: ['./select-view.component.css']
})
export class SelectViewComponent {
  viewCards: number;
  @Output()
  selectView = new EventEmitter<number>();

  constructor() { }

  selectNewView(): void {
    this.selectView.emit(this.viewCards);
  }
}
