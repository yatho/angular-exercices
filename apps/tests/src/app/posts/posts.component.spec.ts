import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostsComponent } from './posts.component';
import { of } from 'rxjs';
import { PostsService } from './posts.service';
import { dummyPosts } from './posts.mock';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  let postServiceMock = {
    getPosts: jest.fn().mockReturnValue(of(dummyPosts)),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostsComponent],
      providers: [
        {
          provide: PostsService,
          useValue: postServiceMock,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have posts', () => {
    component['posts'].subscribe((posts) => {
      expect(posts).toEqual(dummyPosts);
    });
  });

  it('should render posts', () => {
    const nativeElt = fixture.nativeElement;
    const postElements = nativeElt.querySelectorAll('.post');
    expect(postElements.length).toBe(dummyPosts.length);
    dummyPosts.forEach((post, index) => {
      expect(postElements[index].textContent).toContain(post.title);
      expect(postElements[index].textContent).toContain(post.body);
    });
  });
});
