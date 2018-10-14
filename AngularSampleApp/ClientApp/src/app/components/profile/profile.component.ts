import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private testService: TestService) { }

  ngOnInit() {
    
  }

  healthCheck() {
    this.testService.healthCheck()
      .subscribe(rc => console.log(rc));
  }

}