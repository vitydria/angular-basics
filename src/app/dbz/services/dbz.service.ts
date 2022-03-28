import { Injectable } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
  private _characters: Character[] = [
    { name: 'Goku', power: 1000000 },
    { name: 'Vegeta', power: 90000 },
  ];

  constructor() {
    console.log('Service initialized');
  }

  get characters(): Character[] {
    return [...this._characters];
  }

  addCharacter(char: Character) {
    this._characters.push(char);
  }
}
