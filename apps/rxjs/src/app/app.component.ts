import { Component } from '@angular/core';
import { Ex1Component } from './ex1/ex1.component';
import { Ex2Component } from './ex2/ex2.component';
import { Ex3Component } from './ex3/ex3.component';
import { Ex4Component } from './ex4/ex4.component';
import { Ex5Component } from './ex5/ex5.component';
import { SubjectComponent } from './subject/subject.component';

@Component({
  standalone: true,
  imports: [
    Ex1Component,
    Ex2Component,
    Ex3Component,
    Ex4Component,
    Ex5Component,
    SubjectComponent,
  ],
  selector: 'app-root',
  template: `
    <!-- <app-ex1/> -->
    <!-- <app-ex2/> -->
    <!-- <app-ex3/> -->
    <!-- <app-ex4/> -->
    <!-- <app-ex5/> -->
    <app-subject />
  `,
})
export class AppComponent {}
