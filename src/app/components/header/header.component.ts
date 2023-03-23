import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router, public authService: AuthService) { }

  goToHomePage() {
    this.router.navigate(['/', 'accueil']);
  }

  goToDashboard(){
    this.router.navigate(['/', 'utilisateur']);
  }

}
