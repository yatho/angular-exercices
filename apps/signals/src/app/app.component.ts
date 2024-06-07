import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotificationControlComponent } from './notification-control/notification-control.component';
import { NotificationListComponent } from './notification-list/notification-list.component';

@Component({
  standalone: true,
  imports: [NotificationControlComponent, NotificationListComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'signals';
}
