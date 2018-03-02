import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  newTask: string;

  @Output()
  eventTask = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.eventTask.emit(this.newTask);
    this.newTask = '';
  }

}
