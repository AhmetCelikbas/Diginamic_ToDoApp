import { Injectable } from '@angular/core';
import Task from '../models/Task';
import { HttpClient } from '@angular/common/http';
import { default as ConfigService } from './config.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export default class TodoService {

  public todoList: Subject<Array<Task>> = new Subject<Array<Task>>();
  private todoListArray: Array<Task> = [];

  constructor(private config: ConfigService, private http: HttpClient) { }

  fetchTodos(): void {
    this.http.get(`${this.config.API_BASE}${this.config.API_ROUTES.TODOS}${this.config.SORTING_DESC}`).subscribe(
      (response: Array<Task>) => {
        this.todoListArray = response;
        return this.todoList.next(this.todoListArray);
      }
    );
  }

  updateTodo(updatedTask: Task): void {
    this.http.put(`${this.config.API_BASE}${this.config.API_ROUTES.TODOS}${updatedTask.id}`, updatedTask).subscribe(
      () => {
        this.todoListArray = this.todoListArray.map((task) => {
          if (task.id === updatedTask.id) {
            task.title = updatedTask.title;
            task.isDone = updatedTask.isDone;
          }
          return task;
        });
        this.todoList.next(this.todoListArray);
      }
    );
  }

  addTodo(newTask: Task): void {
    this.http.post(`${this.config.API_BASE}${this.config.API_ROUTES.TODOS}`, newTask).subscribe(
      (createdTask: Task) => {
        this.todoListArray.unshift(createdTask);
        this.todoList.next(this.todoListArray);
      }
    );
  }


  deleteTodo(taskToBeDeleted: Task): void {
    this.http.delete(`${this.config.API_BASE}${this.config.API_ROUTES.TODOS}${taskToBeDeleted.id}`).subscribe(() => {
      this.todoListArray.splice(this.todoListArray.indexOf(taskToBeDeleted), 1);
      this.todoList.next(this.todoListArray);
    });
  }

}
