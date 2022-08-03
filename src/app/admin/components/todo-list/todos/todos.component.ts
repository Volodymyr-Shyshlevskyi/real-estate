import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import {delay} from 'rxjs/operators';
import { Todo, TodosService } from '../shared/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  loading: boolean = true
  private searchString = ''

  constructor(private todosService: TodosService) { }

  ngOnInit() {
    this.todosService.fetchTodos()
      .pipe(delay(500))
      .subscribe(() => {
        this.loading = false;
      })
  }

  onChange(id: number) {
    this.todosService.onToggle(id)
  }

  removeTodo(id: number) {
    this.todosService.removeTodo(id).subscribe();
  }

}