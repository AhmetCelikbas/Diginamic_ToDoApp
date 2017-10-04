import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import Task from '../models/Task';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  newTaskTitle: string;

  @Output()
  newTaskAdded: EventEmitter<Task> = new EventEmitter<Task>();

  constructor() { }

  ngOnInit() {
  }

  addTask() {

    if (this.newTaskTitle && this.newTaskTitle.trim().length) {
      this.newTaskAdded.emit(new Task(this.newTaskTitle, false));
    } else {
      console.log('Title input should not be empty.');
    }
  }

}
