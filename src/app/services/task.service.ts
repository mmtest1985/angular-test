import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Task } from '../models/task';


@Injectable()
export class TasksService {

    private tasksList: Array<Task> = [];
    private doneList: Array<Task> = [];

    private tasksListObs = new BehaviorSubject<Array<Task>>([]);
    private tasksDoneObs = new BehaviorSubject<Array<Task>>([]);

    constructor() {
        this.tasksList = [
            {name: 'ccc', created: new Date()},
            {name: 'bbb', created: new Date()},
            {name: 'aaa', created: new Date()},
            {name: 'ddd', created: new Date()},
        ];
        this.tasksListObs.next(this.tasksList);
    }

    add(task: Task) {
        this.tasksList.push(task);
        this.tasksListObs.next(this.tasksList);
    }

    remove(task: Task) {
        this.tasksList = this.tasksList.filter(e => e !== task);
        this.tasksListObs.next(this.tasksList);
    }

    done(task: Task) {
        this.remove(task);
        this.doneList.push(task);
        this.tasksDoneObs.next(this.doneList);
    }

    getTasksListObs(): Observable<Array<Task>> {
        return this.tasksListObs.asObservable();
    }

    getTasksDoneObs(): Observable<Array<Task>> {
        return this.tasksDoneObs.asObservable();
    }
}
