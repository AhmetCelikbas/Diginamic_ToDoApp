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
    this.todoList.push(newTask);
  }

  taskUpdated(task: Task): void {
    console.log(task);
    this.todoList[task.index].isDone = task.isDone;
  }

  removeDoneTasks(): void {
    console.log('REMOVE TASKS : ');
    this.todoList.forEach((task) => {
      if (task.isDone === true) {
        console.log(task);
      }
    });


  }


  ngOnInit() {

    this.todoList = [
      new Task('Faire les courses', false),
      new Task('Envoyer l\'attestation', false),
      new Task('Acheter des stylos', false),
      new Task('Changer l\'ampoule de la cuisine', false),
      new Task('Tabernakle', false),
      new Task('Tabernakle', false),
      new Task('Tabernakle', false),
      new Task('Tabernakle', false),
      new Task('Tabernakle', false),
      new Task('Tabernakle', false),
      new Task('Tabernakle', false),
      new Task('Tabernakle', false),
      new Task('Tabernakle', false),
      new Task('Tabernakle', false),
      new Task('Tabernakle', false),
    ];
  }

}
