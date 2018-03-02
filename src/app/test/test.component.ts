import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  title = 'Angulara';
  
  days = ['Pon', 'Wt', 'Śr', 'Cz', 'Pt', 'So', 'Nd'];

}

class Dog {
    constructor(public name: string, public age: number){
    }
}
