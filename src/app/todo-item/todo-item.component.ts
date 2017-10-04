import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Task from '../models/Task';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input()
  task: Task;

  @Input()
  index: number;

  @Output()
  taskUpdated: EventEmitter<Task> = new EventEmitter<Task>();

  updateTask(): void {
    this.task.index = this.index;
    this.taskUpdated.emit(this.task);
  }

  constructor() { }

  ngOnInit() {
  }

}
