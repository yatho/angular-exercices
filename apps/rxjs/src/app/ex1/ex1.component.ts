import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-ex1',
  standalone: true,
  imports: [AsyncPipe],
  template: ``,
})
export class Ex1Component {
  // TODO : Créer un observable qui émet une séquence de nombre de 1 à 10
  // TODO : Affiche le résultat dans la console et dans le template
  // TODO : Multiplier chaque valeur de l'observable par 2
  // TODO : Emettre uniquement les valeurs pairs

  constructor() {}
}
