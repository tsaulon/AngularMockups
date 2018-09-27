import { Component, OnInit } from '@angular/core';
import { AccountService } from './shared/accounts.service';
import { LoggingService } from './shared/logging.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountService, LoggingService]
})
export class AppComponent implements OnInit {

  accounts: Array<{name: string, status: string}> = [];

  constructor(private accountService: AccountService) {
    
  }

  ngOnInit() {
    this.accounts = this.accountService.accounts
  } 
}
