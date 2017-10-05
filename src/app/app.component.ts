import {Component, OnInit} from '@angular/core';
import Task from './models/Task';
import {default as TodoService} from './services/todo.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private todoService: TodoService) {}

  todoList: Array<Task> = [];

  removeDoneTasks(): void {
    const array = this.todoList;
    array.filter(task => task.isDone).forEach((taskToBeDeleted) => {
      this.todoService.deleteTodo(taskToBeDeleted);
    });
  }

  ngOnInit() {
    this.todoService.fetchTodos();
    this.todoService.todoList.subscribe((fetchedTodoList) => {
      this.todoList = fetchedTodoList;
    });
  }

}
