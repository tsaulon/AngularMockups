import { Injectable, EventEmitter } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable()
export class AccountService {

    constructor(private logService: LoggingService) {

    }

    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      public statusUpdated = new EventEmitter<string>(); 
      
      addAccount(name: string, status: string) {
        this.accounts.push({name, status});
        this.logService.logStatusChange(status);
      }
      
      updateStatus(id: number, status: string) {
        this.accounts[id].status = status;
        this.logService.logStatusChange(status);
      }

}