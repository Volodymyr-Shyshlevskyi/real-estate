import {Component, OnInit} from '@angular/core';
import { Todo, TodosService } from '../shared/todos.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  text: string = '';

  constructor(private todosService: TodosService) {
  }

  ngOnInit() {
  }

  addTodo() {
    const todo: Partial<Todo> = {
      text: this.text
    }

    if (Object.values(todo).some(el => !el)) {
      return;
    }

    this.todosService.addTodo(todo).subscribe();
    this.text = ''
  }
}