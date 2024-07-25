import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest, concat, filter, map, merge, of, range, throwError } from 'rxjs';

@Component({
  selector: 'app-ex2',
  standalone: true,
  template: `
    <h2> Exercice 2 </h2>

    @for (message of errorMessage; track message) {
        <p class="error">{{ message}} </p>
      }
  `
})
export class Ex2Component implements OnInit {
  // TODO : Créer deux observables
  // TODO : Le premier observable émet des valeurs paires de 1 à 10
  private _evenNumbers$ = range(1, 10).pipe(filter(nb => nb % 2 === 0))
  // TODO : Le second observable émet des valeurs impaires de 1 à 10
  private _oddNumbers$ = range(1, 10).pipe(filter(nb => nb % 2 != 0))
  
  // TODO : Merger les deux observables pour n'en former qu'un seul
  private _numbers$ = merge(this._evenNumbers$, this._oddNumbers$)
  
  // TODO : Utiliser un opérateur pour afficher les retours de la méthode getFromId()
  // TODO : Notifier l'utilisateur en cas d'erreur
  errorMessage: string[] = [];

  constructor() {}

  ngOnInit(): void {
    console.log('---------------- exercice 2 ----------------')
    this._numbers$
      .subscribe({
        next: id => {
          getFromId(id).subscribe({ // !REVIEW use switch map instead
            next: result => console.log(result),
            error: error => this.errorMessage.push(`Une erreur est survenue à l'id ${error}.`)
          })
        }
      })
  }
}

// - Contraintes : Il est interdit de modifier cette méthode
const getFromId = (id: number): Observable<{id: number, name: string}> => {
  if (id < 7) return of({id, name: `Name ${id}`});
  return throwError(() => id);
}