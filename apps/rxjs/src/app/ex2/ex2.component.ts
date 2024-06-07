import { Component } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Component({
  selector: 'app-ex2',
  standalone: true,
  template: ``
})
export class Ex2Component {
  // TODO : Créer deux observables
  // TODO : Le premier observable émet des valeurs paires de 1 à 10
  // TODO : Le second observable émet des valeurs impaires de 1 à 10
  // TODO : Merger les deux observables pour n'en former qu'un seul
  // TODO : Utiliser un opérateur pour afficher les retours de la méthode getFromId()
  // TODO : Notifier l'utilisateur en cas d'erreur

  constructor() {}
}

// - Contraintes : Il est interdit de modifier cette méthode
const getFromId = (id: number): Observable<{id: number, name: string}> => {
  if (id < 7) return of({id, name: `Name ${id}`});
  return throwError(() => id);
}