import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './connexion/components/sign-in/sign-in.component';
import { SignUpComponent } from './connexion/components/sign-up/sign-up.component';
import { UtilisateurComponent } from './connexion/components/utilisateur/utilisateur.component';
import { ForgotPasswordComponent } from './connexion/components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './connexion/components/verify-email/verify-email.component';

// route guard
import { AuthGuard } from './core/guard/auth.guard';
import {AccueilComponent} from "./core/components/accueil/accueil.component";


const routes: Routes = [
  {path: '', redirectTo: '/sign-in', pathMatch: 'full'},
  { path: 'sign-in', component: SignInComponent},
  { path: 'accueil', component: AccueilComponent, canActivate: [AuthGuard]},
  { path: 'register-user', component: SignUpComponent },
  { path: 'utilisateur', component: UtilisateurComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  {path: 'joueur', loadChildren: () => import('./participants/participants.module').then(m => m.ParticipantsModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
