import { Injectable, signal } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  [x: string]: any;
  todosSignal = signal<Todo[]>([
    {
      id: 1,
      title: 'Buy groceries',
      description: 'Milk, Bread, Eggs, Cheese',
      status: 'pending',
      createdAt: new Date(),
      dueDate: new Date(new Date().getTime() + 24*60*60*1000), // утре
      archived: false
    },
    {
      id: 2,
      title: 'Read book',
      description: 'Finish reading Angular guide',
      status: 'in-progress',
      createdAt: new Date(),
      dueDate: new Date(new Date().getTime() + 2*24*60*60*1000),
      archived: false
    },
    {
      id: 3,
      title: 'Workout',
      description: 'Gym session for 1 hour',
      status: 'completed',
      createdAt: new Date(),
      dueDate: new Date(new Date().getTime() + 3*24*60*60*1000),
      archived: false
    },
    {
      id: 4,
      title: 'Call Mom',
      description: 'Weekly catch-up call',
      status: 'pending',
      createdAt: new Date(),
      dueDate: new Date(new Date().getTime() + 4*24*60*60*1000),
      archived: false
    }
  ]);

  addTodo(title: string, description: string, dueDate?: Date) {
    const newTodo: Todo = {
      id: Date.now(),
      title,
      description,
      status: 'pending',
      createdAt: new Date(),
      dueDate,
      archived: false
    };
    this.todosSignal.set([...this.todosSignal(), newTodo]);
  }

  updateStatus(id: number, status: 'pending' | 'in-progress' | 'completed') {
    const todos = this.todosSignal();
    const index = todos.findIndex(t => t.id === id);
    if (index !== -1) {
      todos[index].status = status;
      this.todosSignal.set([...todos]);
    }
  }

  deleteTodo(id: number) {
    const todos = this.todosSignal().filter(t => t.id !== id);
    this.todosSignal.set([...todos]);
  }

}
