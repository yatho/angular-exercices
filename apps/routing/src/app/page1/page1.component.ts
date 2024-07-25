import { Component, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SubmenuComponent } from './submenu/submenu.component';
import { Data } from '../data.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-page1',
  standalone: true,
  imports: [RouterOutlet, SubmenuComponent, JsonPipe],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css',
})
export class Page1Component {
  protected data = input<Data>();
}
