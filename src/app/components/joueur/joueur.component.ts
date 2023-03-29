import {Component, OnInit} from '@angular/core';
import {JoueursService} from "../../shared/services/joueurs";
import {ActivatedRoute, Router} from "@angular/router";
import Swal from 'sweetalert2';
import {GroupesService} from "../../shared/services/groupes";
import {map} from "rxjs";
import {Groupes} from "../../models/groupes.model";
import firebase from "firebase/compat";
import {FunctionsService} from "../../shared/services/functionsService";



@Component({
  selector: 'app-joueur',
  templateUrl: './joueur.component.html',
  styleUrls: ['./joueur.component.scss']
})
export class JoueurComponent implements OnInit {

  joueurId: string | null = null;

  constructor(
    public functionsService: FunctionsService,
    public route: ActivatedRoute) {

  }


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.joueurId = params['joueurId'];
      this.functionsService.jr = {...params};
    })
    this.functionsService.showAllGroupes();
      }

}

