import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { PostsComponent } from './posts/posts.component';

@Component({
  standalone: true,
  imports: [HeaderComponent, PostsComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'tests';
}
