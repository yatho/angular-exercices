import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable, map, range, take } from 'rxjs';

@Component({
  selector: 'app-ex1',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <h2> Exercice 1 </h2>
    <div style="display: flex;">
      @for (number of numbers; track number) {
        <p>{{ number}},</p>
      }
    </div>
  `,
})
export class Ex1Component implements OnInit {

  // TODO : Créer un observable qui émet une séquence de nombre de 1 à 10
  private _numbers$ = range(1, 10)
  numbers: Array<number> = []
  
  
  constructor() {}
  
  ngOnInit(): void {
    console.log('---------------- exercice 1 ----------------')
    this._numbers$
    // TODO : Emettre uniquement les valeurs pairs
    // TODO : Multiplier chaque valeur de l'observable par 2
      .pipe(take(10), map(nb => 2*nb))
      .subscribe({
      next: (nb: number) => {
        // TODO : Affiche le résultat dans la console et dans le template
        console.log(nb)
        this.numbers.push(nb)
      } 
    })
  }
}
