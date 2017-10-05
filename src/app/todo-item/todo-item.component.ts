import {Component, Input, OnInit} from '@angular/core';
import Task from '../models/Task';
import {default as TodoService} from '../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input()
  task: Task;

  updateTask(): void {
    this.todoService.updateTodo(this.task);
  }

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

}
