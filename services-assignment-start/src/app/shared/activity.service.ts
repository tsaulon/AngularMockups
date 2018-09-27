import { EventEmitter } from '@angular/core';

export class ActivityService {

    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    public userSetToActive = new EventEmitter<number>();
    public userSetToInactive = new EventEmitter<number>();
  
    onSetToInactive(id: number) {
      this.inactiveUsers.push(this.activeUsers[id]);
      this.activeUsers.splice(id, 1);
    }
  
    onSetToActive(id: number) {
      this.activeUsers.push(this.inactiveUsers[id]);
      this.inactiveUsers.splice(id, 1);
    }
}