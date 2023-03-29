import { Component, OnInit } from '@angular/core';
import {Joueurs} from "../../models/joueurs.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {JoueursService} from "../../shared/services/joueurs";
import {Groupes} from "../../models/groupes.model";
import {map} from "rxjs";
import {GroupesService} from "../../shared/services/groupes";
import {FunctionsService} from "../../shared/services/functionsService";

@Component({
  selector: 'app-ajouter-joueur',
  templateUrl: './ajouter-joueur.component.html',
  styleUrls: ['./ajouter-joueur.component.scss']
})
export class AjouterJoueurComponent implements OnInit {
  angularForm!: FormGroup;

  newJoueur: Joueurs = new Joueurs();
  submitted =  false;

  constructor(
    private formBuilder: FormBuilder,
    private joueursService: JoueursService,
    public functionsService: FunctionsService
  ) {

  }

  ngOnInit(): void {
    this.angularForm = this.formBuilder.group({
      name: ['', Validators.required],
      firstName: ['', Validators.required],
      group: ['', Validators.required],
      email: ['', Validators.required]
      }
    )
    this.functionsService.showAllGroupes();


  }


  savePlayer(): void{
    this.joueursService.create(this.newJoueur).then(() => {
      console.log('Nouveau joueur créé !', this.newJoueur);
      this.submitted = true;
    });
  }

  newPlayer(): void {
    this.submitted = false;
    this.newJoueur = new Joueurs();
  }


}
