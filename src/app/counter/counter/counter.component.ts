import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>{{ title }}</h1>
    <h3>
      Base: <strong> {{ base }} </strong>
    </h3>
    <button (click)="acumulate(base)">+ {{ base }}</button>
    <span> {{ number }} </span>
    <button (click)="acumulate(-base)">- {{ base }}</button>
  `,
})
export class CounterComponent {
  title: string = 'Counter App';
  number: number = 10;
  base: number = 5;

  acumulate(valor: number) {
    this.number += valor;
  }
}
