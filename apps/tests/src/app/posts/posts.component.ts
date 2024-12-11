import { Component, inject } from "@angular/core";
import { PostsService } from "./posts.service";
import { AsyncPipe } from "@angular/common";

@Component({
  selector: "app-posts",
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: "./posts.component.html",
  styleUrl: "./posts.component.css",
})
export class PostsComponent {
  protected posts = inject(PostsService).getPosts();
}
