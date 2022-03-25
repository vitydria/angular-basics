import { Component, Input } from '@angular/core';
import { NewCharacter } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
})
export class AddCharacterComponent {
  @Input() characters: NewCharacter[] = [];

  @Input() character: NewCharacter = {
    name: '',
    power: 0,
  };

  add(): void {
    if (this.character.name.trim().length === 0) return;

    this.characters.push(this.character);
    this.character = {
      name: '',
      power: 0,
    };

    console.log(this.characters);
  }
}
