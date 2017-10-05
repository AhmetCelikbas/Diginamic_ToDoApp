import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import Task from '../models/Task';
import {default as TodoService} from '../services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  newTaskTitle: string;

  @Output()
  newTaskAdded: EventEmitter<Task> = new EventEmitter<Task>();

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  addTask() {


    if (this.newTaskTitle && this.newTaskTitle.trim().length) {

      this.todoService.addTodo(new Task(this.newTaskTitle, false));


      this.newTaskTitle = '';
    } else {
      console.log('Title input should not be empty.');
    }
  }

}
