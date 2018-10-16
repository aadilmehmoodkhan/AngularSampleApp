import { Component, OnInit, Inject } from '@angular/core';
import { LocalStore } from 'src/app/services/localstore.service';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html'
})
export class TopNavigationComponent implements OnInit {

  constructor(private localStore: LocalStore, private accountService: AccountService) {
  }

  userName: string = "";

  ngOnInit(): void {
    var loginPayLoad = this.localStore.getLoginPayload();
    if(loginPayLoad == null) {
      this.accountService.getLoginPayload()
        .subscribe(data => {
          this.localStore.setLoginPayload(data);
          this.userName = this.localStore.getLoginPayload().userName;
        });
    }
  }

  Logout() {
    this.localStore.removePayload();
    window.location.href = "/App/Logout";
  }
}
