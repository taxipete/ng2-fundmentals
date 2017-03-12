import { Component, OnInit } from '@angular/core';
import { AuthService } from './user/auth.service'

@Component({
  selector: 'events-apps',
  template: `
  <nav-bar></nav-bar>
  <router-outlet></router-outlet>
  `
})
export class EventsAppComponent {
  constructor( private auth: AuthService) { }

  ngOnInit() {
    this.auth.checkAuthenicationStatus()
  }
}
