import {Component, Input, OnInit} from '@angular/core';
import Task from '../models/Task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input()
  todoList: Array<Task>;

  constructor() { }

  ngOnInit() {
  }

}
