import { Component, OnInit } from '@angular/core';
import { filter, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-ex4',
  standalone: true,
  imports: [],
  template: `
    <h2> Exercice 4 </h2>
    <div style="display: flex;">
      @for (r of result; track r) {
        <p>{{ r }} </p>
      }
    </div>
  `
})
export class Ex4Component implements OnInit {
  // TODO : Utiliser un interval pour émettre des valeurs
  _count: number = 0
  private _values$ = interval(1000).pipe(map(_ => {
    this._count += 1
    return this._count
  }))

  // TODO : Utiliser un opérateur pour émettre les 5 dernières valeurs
  

  result: Array<number> = []

  constructor() {}
  ngOnInit(): void {
    console.log('---------------- exercice 3 ----------------')
    this._values$
    .pipe(
      // TODO : Utiliser un opérateur pour limiter le nombre de valeurs émises à 10
      take(10),
      // TODO : Utiliser un opérateur pour limiter les valeurs émises en fonction d'une condition
      filter(value => value % 2 === 0))
    .subscribe(value => {
      console.log(value)
      this.result.push(value)
    })
  }
}
