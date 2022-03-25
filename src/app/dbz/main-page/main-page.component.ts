import { Component } from '@angular/core';
import { NewCharacter } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  characters: NewCharacter[] = [
    { name: 'Goku', power: 1000000 },
    { name: 'Vegeta', power: 90000 },
  ];

  newCharacter: NewCharacter = {
    name: '',
    power: 0,
  };
}
