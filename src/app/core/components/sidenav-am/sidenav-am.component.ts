import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-sidenav-am',
  templateUrl: './sidenav-am.component.html',
  styleUrls: ['./sidenav-am.component.scss']
})
export class SidenavAMComponent implements OnInit {

  isExpanded: boolean = false;
  showSidenav: boolean = true;


  constructor(public authService: AuthService, public router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (val.url == '/' || val.url == '/sign-in' || val.url == '/register-user' || val.url == '/verify-email-address'
          || val.url == '/forgot-password'){
          this.showSidenav = false;
        } else {
          this.showSidenav = true;
        }
      }
    })
  }

  ngOnInit(): void {

  }





}
