import { Component, Input } from '@angular/core';
import { NewCharacter } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
})
export class CharactersComponent {
  @Input() characters: NewCharacter[] = [];
  @Input() add() {}
}
