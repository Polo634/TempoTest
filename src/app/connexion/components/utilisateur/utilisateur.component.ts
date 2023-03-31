import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';


@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss'],
})

export class UtilisateurComponent implements OnInit {
  constructor(public authService: AuthService) {}


  ngOnInit(): void {}
}
