import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export interface Todo {
  id: number
  text: string
  completed: boolean
  created_at: string
}

@Injectable({providedIn: 'root'})

export class TodosService {
  public todos: Todo[] = []

  apiUrl = `${environment.apiUrl}/todos`

  todosList$: BehaviorSubject<Todo[]> = new BehaviorSubject([] as Todo[]);

  constructor(private http: HttpClient) {}

  fetchTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl)
      .pipe(
        tap((data: Todo[]) => this.todosList$.next(data.sort((a,b) => (new Date(a.created_at)).getTime() - (new Date(b.created_at)).getTime()))),
      )
  }

  onToggle(id: number) {
    const idx = this.todos.findIndex(t => t.id === id)
    this.todos[idx].completed = !this.todos[idx].completed
  }

  removeTodo(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      tap(() => {
        this.todosList$.next(this.todosList$.getValue().filter(el => el.id !== id));
      })
    );  }

  addTodo(todo: Partial<Todo>) {
    return this.http.post<Todo>(this.apiUrl, todo).pipe(
      tap((newTodo) => {
        this.todosList$.next([...this.todosList$.getValue(), newTodo]);
      })
    )
  }
}