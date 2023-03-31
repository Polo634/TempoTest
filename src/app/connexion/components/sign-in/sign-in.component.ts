import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import {FormControl, Validators} from "@angular/forms";


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})

export class SignInComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
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

