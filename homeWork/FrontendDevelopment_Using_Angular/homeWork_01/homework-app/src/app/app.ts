import { Component } from '@angular/core';
import { TaskManagerComponent } from './task-manager/task-manager';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskManagerComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'homework-app';
}
