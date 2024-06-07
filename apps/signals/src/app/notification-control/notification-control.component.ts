import { Component, inject } from '@angular/core';
import { NotificationService } from '../notification.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notification-control',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './notification-control.component.html',
  styleUrl: './notification-control.component.css',
})
export class NotificationControlComponent {
  protected newNotification: string = '';
  private notificationService = inject(NotificationService);

  addNotification(): void {
    if (this.newNotification.trim()) {
      this.notificationService.addNotification(this.newNotification.trim());
      this.newNotification = '';
    }
  }
}
