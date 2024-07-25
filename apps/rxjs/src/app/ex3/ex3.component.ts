import { Component, OnInit } from '@angular/core';
import { combineLatest, debounce, interval, map, range, sampleTime, scan, take } from 'rxjs';

@Component({
  selector: 'app-ex3',
  standalone: true,
  imports: [],
  template: `
      <h2> Exercice 3 </h2>
      <div style="display: flex;">
        @for (tuple of tuples; track tuple[0]) {
          <p>{{ tuple }} </p>
        }
      </div>
  `
})
export class Ex3Component implements OnInit {
  // TODO : Créer deux observables qui emettent des valeurs à interval régulier mais un interval différent
  private _lettreA$ = interval(1000).pipe(map(_ => 'A'))
  private _lettreZ = interval(1500).pipe(map(_ => 'Z'))
  // TODO : Combiner les deux observables pour former un qui émet des tuples des valeurs émises par chacun des deux observables
  private _combined$ = combineLatest([this._lettreA$, this._lettreZ]).pipe(map(([nb1, nb2]) => [nb1, nb2]))
  
  tuples: Array<string []> = []
  constructor() {}
  
  ngOnInit(): void {
    console.log('---------------- exercice 3 ----------------')
    // TODO : Afficher uniquement les 10 premières valeurs émises par le nouvel observable
    this._combined$.pipe(take(10)).subscribe((tuple: Array<string>) => {
      console.log(tuple)
      this.tuples.push(tuple)
    })

  }
}
