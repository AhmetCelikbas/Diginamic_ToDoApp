import {Component, OnInit} from '@angular/core';
import Task from './models/Task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  todoList: Array<Task> = [];

  newTaskAdded(newTask): void {
    this.todoList.unshift(newTask);
  }

  taskUpdated(task: Task): void {
    console.log(task);
    this.todoList[task.index].isDone = task.isDone;
  }

  removeDoneTasks(): void {
    this.todoList = this.todoList.filter((task) => {
      return !task.isDone;
    });


  }


  ngOnInit() {
    /*
    this.todoList = [
      new Task('Faire les courses', false),
      new Task('Envoyer l\'attestation', false),
      new Task('Acheter des stylos', false),
      new Task('Changer l\'ampoule de la cuisine', false),
      new Task('Tabernakle', false),
    ];
    */
  }

}
