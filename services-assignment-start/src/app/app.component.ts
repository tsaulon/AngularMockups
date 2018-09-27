import { Component, OnInit } from '@angular/core';
import { ActivityService } from './shared/activity.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ActivityService]
})
export class AppComponent implements OnInit{
  
  constructor(private activityService: ActivityService) {

  }

  ngOnInit() {
  }
}
