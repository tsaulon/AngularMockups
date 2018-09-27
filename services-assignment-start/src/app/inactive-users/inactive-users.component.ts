import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../shared/activity.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
  inactiveUsers: Array<string> = [];

  constructor(private activityService: ActivityService) {
    this.activityService.userSetToActive.subscribe((id: number) => this.activityService.onSetToActive(id));
  }

  ngOnInit() {
    this.inactiveUsers = this.activityService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.activityService.onSetToActive(id);
  }
}
