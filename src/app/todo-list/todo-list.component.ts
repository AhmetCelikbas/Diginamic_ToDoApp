import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Task from '../models/Task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input()
  todoList: Array<Task>;

  @Output()
  taskUpdated: EventEmitter<Task> = new EventEmitter<Task>();

  transmitUpdatedTask(task: Task): void {
    this.taskUpdated.emit(task);
  }
  constructor() { }

  ngOnInit() {
  }

}
