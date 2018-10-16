import { Component, OnInit, Inject } from '@angular/core';
import { LocalStore } from 'src/app/services/localstore.service';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html'
})
export class TopNavigationComponent implements OnInit {

  constructor(private localStore: LocalStore) {
  }

  userName: string = "";

  ngOnInit(): void {
    this.userName = this.localStore.getLoggedInUserName();
  }
}
