import { Component, OnInit } from '@angular/core';
import { DataService } from './shared/data.service';
import { DateService } from './datepicker/date.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';

  constructor(
    private data: DataService,
    private dateService: DateService) { }

  ngOnInit() {
    this.dateService.changeDate(this.dateService.getCurrentDate());
  }
}
