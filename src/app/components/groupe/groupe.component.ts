import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GroupesService} from "../../shared/services/groupes";
import {map} from "rxjs";
import firebase from "firebase/compat";
import {JoueursService} from "../../shared/services/joueurs";
import {Joueurs} from "../../models/joueurs.model";
import {FunctionsService} from "../../shared/services/functionsService";

@Component({
  selector: 'app-groupe',
  templateUrl: './groupe.component.html',
  styleUrls: ['./groupe.component.scss']
})
export class GroupeComponent implements OnInit {

  constructor(public functionsService: FunctionsService) {

  }

  ngOnInit(): void {
    this.functionsService.showAllGroupes();
  }

}


