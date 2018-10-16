import { Component, OnInit, Inject } from '@angular/core';
import { AccountService } from './services/account.service';
import { LOCAL_STORAGE_TOKEN, LocalStore } from './services/localstore.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  title = 'Freelance World';

  constructor(private accountService: AccountService,
    private localStore: LocalStore) {
  }

  ngOnInit(): void {
    this.accountService.getUserName()
    .subscribe(o => {
      let username = o.data;
      this.localStore.setLoggedInUserName(username);
    });
  }
}
