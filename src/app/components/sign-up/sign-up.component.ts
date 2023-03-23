import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})

export class SignUpComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  pseudo = new FormControl('', [Validators.required,Validators.min(2)])
  hide = true;
  constructor(public authService: AuthService) {}

  ngOnInit() {}

  getErrorMessage() {
    if (this.email.hasError('required')){
      return 'Merci de renseigner votre identifiant';
    }
    return this.email.hasError('email') ? 'Email invalide' : '';
  }
}
