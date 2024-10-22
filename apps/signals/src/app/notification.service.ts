import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type Notification = {
  id: number;
  message: string;
  read: boolean;
};

const NOTIFICATIONS: Notification[] = [
  { id: 1, message: 'Welcome to the app!', read: false },
  { id: 2, message: 'You have a new notification', read: false },
  { id: 3, message: 'Your account is about to expire', read: false },
];

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notifications: WritableSignal<Notification[]> = signal(NOTIFICATIONS);
  private idCounter = NOTIFICATIONS.length + 1;

  constructor() {}

  getNotifications(): Signal<Notification[]> {
    return this.notifications.asReadonly();
  }

  addNotification(message: string): void {
    const newNotification: Notification = {
      id: this.idCounter++,
      message,
      read: false,
    };
    this.notifications.update((notifications) => [
      ...notifications,
      newNotification,
    ]);
  }

  markAsRead(id: number): void {
    this.notifications.update((notifications) => {
      const notif = notifications.find((notif) => notif.id === id);
      if (notif) {
        notif.read = true;
      }
      return notifications;
    });
  }

  removeNotification(id: number): void {
    this.notifications.update((notifications) =>
      notifications.filter((notif) => notif.id !== id)
    );
  }
}
