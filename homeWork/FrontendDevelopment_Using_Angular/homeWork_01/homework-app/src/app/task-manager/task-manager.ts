import { Component, OnDestroy, signal, computed, effect, EffectRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Task {
  id: number;
  title: string;
  completed: boolean;
  updatedAt: string;
}

@Component({
  selector: 'app-task-manager',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-manager.html',
  styleUrls: ['./task-manager.css']
})
export class TaskManagerComponent implements OnDestroy {
  tasks = signal<Task[]>([
    { id: 1, title: 'Walk the dog', completed: false, updatedAt: new Date().toISOString() }
  ]);
  newTask = signal('');
  logs = signal<{ time: string; message: string }[]>([]);
  error = signal<string | null>(null);

  completedCount = computed(() => this.tasks().filter(t => t.completed).length);
  pendingCount = computed(() => this.tasks().length - this.completedCount());

  private tasksEffectRef: EffectRef = effect(() => {
    const snapshot = this.tasks();
    console.debug('[effect] tasks snapshot length =', snapshot.length);
  });

  editingTaskId: number | null = null;
  editTitle: string = '';

  constructor() {
    this.log('Component has been initialized');
  }

  ngOnDestroy(): void {
    this.tasksEffectRef.destroy();
    this.log('Component has been destroyed');
  }

  addTask() {
    const title = this.newTask().trim();
    if (!title) {
      this.error.set('It is not allowed to add empty task.');
      return;
    }
    this.error.set(null);

    const nextId = this.tasks().length ? Math.max(...this.tasks().map(t => t.id)) + 1 : 1;
    const task: Task = {
      id: nextId,
      title,
      completed: false,
      updatedAt: new Date().toISOString()
    };

    this.tasks.update(list => [...list, task]);
    this.newTask.set('');
    this.log(`Added Task: "${title}"`);
  }

  toggleCompleted(id: number) {
    this.tasks.update(list => {
      const updated = list.map(t =>
        t.id === id ? { ...t, completed: !t.completed, updatedAt: new Date().toISOString() } : t
      );
      const changed = updated.find(t => t.id === id);
      this.log(`Task "${changed?.title}" is marked as ${changed?.completed ? 'finished' : 'not completed'}`);
      return updated;
    });
  }

  startEdit(task: Task) {
    this.editingTaskId = task.id;
    this.editTitle = task.title;
    this.error.set(null);
  }

  saveEdit(id: number) {
    const title = this.editTitle.trim();
    if (!title) {
      this.error.set('Task title cannot be empty.');
      return;
    }
    this.updateTask(id, { title });
    this.editingTaskId = null;
    this.editTitle = '';
    this.error.set(null);
  }

  cancelEdit() {
    this.editingTaskId = null;
    this.editTitle = '';
    this.error.set(null);
  }

  updateTask(id: number, updatedFields: Partial<Task>) {
    this.tasks.update(list => {
      return list.map(task =>
        task.id === id ? { ...task, ...updatedFields, updatedAt: new Date().toISOString() } : task
      );
    });

    const updatedTask = this.tasks().find(t => t.id === id);
    if (updatedTask) {
      this.log(`Updated task "${updatedTask.title}" (id: ${id})`);
    }
  }

  deleteTask(id: number) {
    const taskToDelete = this.tasks().find(t => t.id === id);
    if (!taskToDelete) return;

    this.tasks.update(list => list.filter(t => t.id !== id));
    this.log(`Deleted task "${taskToDelete.title}" with id ${id}`);
  }

  clearAll() {
    this.tasks.set([]);
    this.log('Deleted all tasks');
  }

  private log(message: string) {
    const time = new Date().toLocaleString();
    this.logs.update(l => [{ time, message }, ...l].slice(0, 50));
    console.log(`[TaskManager] ${time} — ${message}`);
  }
}
