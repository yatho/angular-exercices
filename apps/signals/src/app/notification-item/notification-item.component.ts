import { Component, Input, inject } from '@angular/core';
import { NotificationService, Notification } from '../notification.service';

@Component({
  selector: 'app-notification-item',
  standalone: true,
  imports: [],
  templateUrl: './notification-item.component.html',
  styleUrl: './notification-item.component.css',
})
export class NotificationItemComponent {
  @Input({required: true}) notification!: Notification;
  private notificationService = inject(NotificationService);

  protected markAsRead(): void {
    this.notificationService.markAsRead(this.notification.id);
  }

  protected removeNotification(): void {
    this.notificationService.removeNotification(this.notification.id);
  }
}
