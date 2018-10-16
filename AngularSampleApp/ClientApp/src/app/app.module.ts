import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AccountService } from './services/account.service';
import { LOCAL_STORAGE_TOKEN, LocalStore } from './services/localstore.service';

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "profile", component: ProfileComponent }
    ])
  ],
  providers: [
    AccountService,
    { provide: LOCAL_STORAGE_TOKEN, useValue: window.localStorage },
    LocalStore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
