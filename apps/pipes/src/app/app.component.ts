import {
  AsyncPipe,
  DatePipe,
  DecimalPipe,
  SlicePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReversePipe } from './pipes/reverse.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@Component({
  standalone: true,
  imports: [
    FormsModule,
    UpperCasePipe,
    DatePipe,
    DecimalPipe,
    SlicePipe,
    ReversePipe,
    TruncatePipe,
    FilterPipe,
    AsyncPipe,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  private reversePipe = new ReversePipe();

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
    this.items = [...this.items, techno];
  }

  ngOnInit() {
    console.log(this.items.map((item) => this.reversePipe.transform(item)));
  }
}
