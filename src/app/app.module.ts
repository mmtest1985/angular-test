import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TestComponent} from './test/test.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TodoTaskComponent } from './todo-task/todo-task.component';
import { DoneTaskComponent } from './done-task/done-task.component';
import { Klikacz1Component } from './klikacz1/klikacz1.component';
import { Klikacz2Component } from './klikacz2/klikacz2.component';
import { LogService } from './services/log.service';
import { TasksService } from './services/task.service';
import { CheckedDirective } from './shared/checked.directive';
import { DateDirective } from './shared/date.directive';
import { TransformTaskPipe } from './shared/transform-task.pipe';
import { SortNamePipe } from './shared/sort-name.pipe';


@NgModule({
    declarations: [
        AppComponent,
        TestComponent,
        AddTaskComponent,
        TodoTaskComponent,
        DoneTaskComponent,
        Klikacz1Component,
        Klikacz2Component,
        CheckedDirective,
        DateDirective,
        TransformTaskPipe,
        SortNamePipe
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [LogService, TasksService],
    bootstrap: [AppComponent]
})
export class AppModule {}
