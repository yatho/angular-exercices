import { Component, inject } from '@angular/core';
import { NotificationService } from '../notification.service';
import { NotificationItemComponent } from '../notification-item/notification-item.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-notification-list',
  standalone: true,
  imports: [NotificationItemComponent, AsyncPipe],
  templateUrl: './notification-list.component.html',
  styleUrl: './notification-list.component.css',
})
export class NotificationListComponent {
  protected notifications$ = inject(NotificationService).getNotifications();
}
