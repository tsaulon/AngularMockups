import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../shared/activity.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
  activeUsers: Array<string> = [];


  constructor(private activityService: ActivityService) {
    this.activityService.userSetToInactive.subscribe((id: number) => this.activityService.onSetToInactive(id));
  }

  ngOnInit() {
    this.activeUsers = this.activityService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.activityService.onSetToInactive(id);
  }
}
