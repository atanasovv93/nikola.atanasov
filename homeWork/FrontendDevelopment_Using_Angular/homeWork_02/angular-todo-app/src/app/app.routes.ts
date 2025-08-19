import { Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoCreateComponent } from './components/todo-create/todo-create.component';

export const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'create', component: TodoCreateComponent },
  { path: '**', redirectTo: '' }
];
