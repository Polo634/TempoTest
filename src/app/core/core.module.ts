import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import {AuthService} from "./services/auth.service";
import {SidenavAMComponent} from "./components/sidenav-am/sidenav-am.component";
import {FooterComponent} from "./components/footer/footer.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {RouterModule} from "@angular/router";
import * as fr from "@angular/common/locales/fr";
import {AccueilComponent} from "./components/accueil/accueil.component";
import {AngularMaterialModule} from "../angular-material/angular-material.module";
import {JoueursService} from "./services/joueurs";




@NgModule({
  declarations: [
    SidenavAMComponent,
    FooterComponent,
    AccueilComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    AngularMaterialModule,
    RouterModule
  ],
  exports: [
    SidenavAMComponent,
    FooterComponent,
    AccueilComponent,

  ],
  providers: [
    AuthService,
    JoueursService,
    {provide: LOCALE_ID, useValue: 'fr-FR'}
  ]
})
export class CoreModule {
  constructor() {
    registerLocaleData(fr.default)
  }
}
