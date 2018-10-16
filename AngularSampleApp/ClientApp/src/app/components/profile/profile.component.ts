import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    
  }

  healthCheck() {
    this.accountService.healthCheck()
      .subscribe(rc => console.log(rc));
  }

}
