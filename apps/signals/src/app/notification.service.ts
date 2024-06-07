import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type Notification = {
  id: number;
  message: string;
  read: boolean;
}

const NOTIFICATIONS: Notification[] = [
  { id: 1, message: 'Welcome to the app!', read: false },
  { id: 2, message: 'You have a new notification', read: false },
  { id: 3, message: 'Your account is about to expire', read: false}
];

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notifications: Notification[] = NOTIFICATIONS;
  private notificationsSubject = new BehaviorSubject<Notification[]>(this.notifications);
  private idCounter = 0;

  constructor() { }

  getNotifications(): Observable<Notification[]> {
    return this.notificationsSubject.asObservable();
  }

  addNotification(message: string): void {
    const newNotification: Notification = {
      id: this.idCounter++,
      message,
      read: false
    };
    this.notifications.push(newNotification);
    this.notificationsSubject.next(this.notifications);
  }

  markAsRead(id: number): void {
    const notification = this.notifications.find(notif => notif.id === id);
    if (notification) {
      notification.read = true;
      this.notificationsSubject.next(this.notifications);
    }
  }

  removeNotification(id: number): void {
    this.notifications = this.notifications.filter(notif => notif.id !== id);
    this.notificationsSubject.next(this.notifications);
  }
}
