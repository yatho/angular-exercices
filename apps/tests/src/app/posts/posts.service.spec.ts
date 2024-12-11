import { TestBed } from '@angular/core/testing';
import { PostsService } from './posts.service';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { dummyPosts } from './posts.mock';

describe('PostsService', () => {
  let service: PostsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(PostsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should fetch posts', () => {
    service.getPosts().subscribe((posts) => {
      expect(posts.length).toBe(2);
      expect(posts).toEqual(dummyPosts);
    });

    const req = httpMock.expectOne(
      'https://jsonplaceholder.typicode.com/posts',
    );
    expect(req.request.method).toBe('GET');
    req.flush(dummyPosts);
  });
});
