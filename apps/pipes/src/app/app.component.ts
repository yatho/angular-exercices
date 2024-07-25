import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [FormsModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  today = Date.now();
  name = 'Angular';
  value = 'pipes';

  searchText = '';

  items = [
    'Angular',
    'React',
    'Vue',
    'Svelte',
    'Ember',
    'Backbone',
    'Knockout',
  ];

  addTechno(techno: string) {
    this.items.push(techno);
  }
}
