import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-create',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.scss']
})
export class TodoCreateComponent {
  title = '';
  description = '';
  dueDate?: string;

  constructor(private todoService: TodoService, private router: Router) {}

  addTodo() {
  if (!this.title.trim() || !this.description.trim()) {
    return; 
  }

  if (this.dueDate) {
    const due = new Date(this.dueDate);
    const today = new Date();
    today.setHours(0,0,0,0);
    if (due < today) {
      alert("Due date cannot be in the past!");
      return;
    }
    this.todoService.addTodo(this.title, this.description, due);
  } else {
    this.todoService.addTodo(this.title, this.description);
  }

  this.router.navigate(['/']);
}

}
