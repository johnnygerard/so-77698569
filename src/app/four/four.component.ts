import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { Todo } from './Todo.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-four',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './four.component.html',
  styleUrl: './four.component.scss'
})
export class FourComponent {
  todos: Todo[] = [];

  constructor(private http: HttpClient) {
    this.fetchData();
  }

  private fetchData(): void {
    this.http
      .get<Todo[]>('https://basss.free.beeceptor.com/todos')
      .pipe(tap(t => console.log(t)))
      .subscribe(todos => {
        this.todos = todos;
      });
  }
}
