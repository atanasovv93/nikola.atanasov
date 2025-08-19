import { Component, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  todos = signal<Todo[]>([]);
  search = signal('');

  constructor(private todoService: TodoService) {
    this.todos.set(this.todoService.todosSignal());

    effect(() => {
      this.todos.set(this.todoService.todosSignal());
    });
  }

  get filteredTodos() {
    return this.todos().filter(todo =>
      todo.title.toLowerCase().includes(this.search().toLowerCase())
    );
  }

  updateStatus(id: number, status: 'pending' | 'in-progress' | 'completed') {
    this.todoService.updateStatus(id, status);
  }

  delete(id: number) {
    this.todoService.deleteTodo(id);
  }
}
