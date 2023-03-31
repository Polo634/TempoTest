import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// route guard
import { AuthGuard } from './core/guard/auth.guard';
import {AccueilComponent} from "./core/components/accueil/accueil.component";
import {SignInComponent} from "./connexion/components/sign-in/sign-in.component";
import {UtilisateurComponent} from "./user/components/utilisateur/utilisateur.component";
import {ForgotPasswordComponent} from "./inscription/components/forgot-password/forgot-password.component";
import {VerifyEmailComponent} from "./inscription/components/verify-email/verify-email.component";
import {SignUpComponent} from "./inscription/components/sign-up/sign-up.component";


const routes: Routes = [
  {path: '', redirectTo: '/sign-in', pathMatch: 'full'},
  { path: 'sign-in', component: SignInComponent},
  { path: 'accueil', component: AccueilComponent, canActivate: [AuthGuard]},
  { path: 'register-user', component: SignUpComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'utilisateur', component: UtilisateurComponent},
  {path: 'joueur', loadChildren: () => import('./participants/participants.module').then(m => m.ParticipantsModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
