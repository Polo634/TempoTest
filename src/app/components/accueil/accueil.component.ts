import {Component, OnInit} from '@angular/core';
import {JoueursService} from "../../shared/services/joueurs";
import {Joueurs} from "../../models/joueurs.model";
import {map} from "rxjs";
import firebase from "firebase/compat";
import {Router} from "@angular/router";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {GroupesService} from "../../shared/services/groupes";
import {Groupes} from "../../models/groupes.model";
import Swal from "sweetalert2";
import {FunctionsService} from "../../shared/services/functionsService";


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit{

  currentDate = new Date();


  constructor(
    public functionsService: FunctionsService
  ) {}


  ngOnInit(): void {
    this.functionsService.showAllJoueurs();
    this.functionsService.showAllGroupes();
  }


}
