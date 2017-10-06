import {Component, OnInit, OnDestroy} from '@angular/core';
import Task from './models/Task';
import {default as TodoService} from './services/todo.service';

let subscription: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(private todoService: TodoService) {}

  todoList: Array<Task> = [];

  removeDoneTasks(): void {
    const array = this.todoList;
    array.filter(task => task.isDone).forEach((taskToBeDeleted) => {
      this.todoService.deleteTodo(taskToBeDeleted);
    });
  }

  ngOnInit(): void {
    this.todoService.fetchTodos();
    subscription = this.todoService.todoList.subscribe((fetchedTodoList) => {
      this.todoList = fetchedTodoList;
    });
  }

  ngOnDestroy(): void {
    subscription.unsubscribe();
  }

}
