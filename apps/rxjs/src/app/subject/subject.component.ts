import { Component, model, signal } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Subject, ReplaySubject, BehaviorSubject, takeUntil } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [FormsModule, AsyncPipe],
  templateUrl: './subject.component.html',
})
export class SubjectComponent {
  subject = new Subject<string>();
  replaySubject = new ReplaySubject<string>();
  behaviorSubject = new BehaviorSubject<string>('');

  resetSubject = new Subject<void>();

  message = model('');
  messages = signal<string[]>([]);

  sendMessage(): void {
    this.subject.next(this.message());
    this.replaySubject.next(this.message());
    this.behaviorSubject.next(this.message());
    this.messages.update((messages) => [...messages, this.message()]);
    this.message.set('');
  }

  reset(): void {
    this.messages.set([]);
    this.resetSubject.next();
    this.resetSubject.complete();
    this.resetSubject = new Subject<void>();
  }

  subscribeToSubject(): void {
    this.subject
      .pipe(takeUntil(this.resetSubject))
      .subscribe((message) => console.log('Subject:', message));
  }

  subscribeToReplaySubject(): void {
    this.replaySubject
      .pipe(takeUntil(this.resetSubject))
      .subscribe((message) => console.log('ReplaySubject:', message));
  }

  subscribeToBehaviorSubject(): void {
    this.behaviorSubject
      .pipe(takeUntil(this.resetSubject))
      .subscribe((message) => console.log('BehaviorSubject:', message));
  }
}
