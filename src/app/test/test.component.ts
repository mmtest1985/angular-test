import { Component, OnInit } from '@angular/core';
import { ClickService } from '../services/click.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers: [ClickService]
})
export class TestComponent implements OnInit {

  title = 'Angulara';

  days = ['Pon', 'Wt', 'Śr', 'Cz', 'Pt', 'So', 'Nd'];

  allClicks: number;

  constructor(private clickService: ClickService) { }

  ngOnInit(): void {
    this.clickService.getSum().subscribe(clicks => {
      this.allClicks = clicks;
    });
  }

}

class Dog {
    constructor(public name: string, public age: number){
    }
}
