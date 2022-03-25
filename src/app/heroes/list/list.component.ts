import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  heroes: string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'Thor',
    'Capitán América',
  ];
  clearHeroe: string = '';

  clear() {
    this.clearHeroe = this.heroes.shift() || '';
  }
}
