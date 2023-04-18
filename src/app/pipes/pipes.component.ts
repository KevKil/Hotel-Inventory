import { Component } from '@angular/core';

@Component({
  selector: 'hinv-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent {
  a: number = 0.259;
  b: number = 1.3495;

  today: number = Date.now();

  collection: string[] = ['a', 'b', 'c', 'd'];

  pi: number = 3.14159265359;
}
