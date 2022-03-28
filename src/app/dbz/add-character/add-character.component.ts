import { Component,  Input } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
})
export class AddCharacterComponent {
  constructor(private DbzService: DbzService) {}
  @Input() character: Character = {
    name: '',
    power: 0,
  };

  add(): void {
    if (this.character.name.trim().length === 0) return;

    this.DbzService.addCharacter(this.character);

    this.character = {
      name: '',
      power: 0,
    };
  }
}
