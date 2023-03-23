import { Component } from '@angular/core';
import {faDoorOpen, faHome, faUser} from "@fortawesome/free-solid-svg-icons";
import {AuthService} from "../../shared/services/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  faHome = faHome;
  faDoor = faDoorOpen;

  faJoueurs = faUser;

  constructor( public authService: AuthService, public router: Router) {
  }

}
