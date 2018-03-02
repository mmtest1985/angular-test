import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    tasksList: Array<string> = [];
    doneList: Array<string> = [];

    ngOnInit() {
        this.tasksList = ['aaa', 'vv', 'bbb', 'fdgdfg'];
    }

    add(task: string) {
        this.tasksList.push(task);
    }

    remove(task: string) {
        this.tasksList = this.tasksList.filter(e => e !== task);
    }

    done(task: string) {
        this.remove(task);
        this.doneList.push(task);
    }

}
