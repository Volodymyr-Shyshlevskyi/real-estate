import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosFilterPipe } from './shared/todos-filter.pipe';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodosService } from './shared/todos.service'
import { TodosComponent } from './todos/todos.component'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
  },
];

@NgModule({
  declarations: [
    TodosFilterPipe,
    TodoFormComponent,
    TodosComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
  providers: [TodosService],
})
export class TodosModule {}