import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})

export class SignUpComponent {
  email = new FormControl('', [Validators.required, Validators.email]);

  hide = true;
  constructor(public authService: AuthService) {}

  getErrorMessage() {
    if (this.email.hasError('required')){
      return 'Merci de renseigner votre identifiant';
    }
    return this.email.hasError('email') ? 'Email invalide' : '';
  }
}