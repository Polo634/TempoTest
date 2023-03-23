import { Component, OnInit } from '@angular/core';
import {Joueurs} from "../../models/joueurs.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {JoueursService} from "../../shared/services/joueurs";

@Component({
  selector: 'app-ajouter-joueur',
  templateUrl: './ajouter-joueur.component.html',
  styleUrls: ['./ajouter-joueur.component.scss']
})
export class AjouterJoueurComponent implements OnInit {
  angularForm!: FormGroup;

  newJoueur: Joueurs = new Joueurs();
  submitted =  false;
  url = ''

  constructor(private formBuilder: FormBuilder, private joueursService: JoueursService) {

  }

  ngOnInit(): void {
    this.angularForm = this.formBuilder.group({
      name: ['', Validators.required],
      firstName: ['', Validators.required],
      group: [''],
      }
    )
  }


  savePlayer(): void{
    this.joueursService.create(this.newJoueur).then(() => {
      console.log('Nouveau joueur créé !');
      this.submitted = true;
    });
  }

  newPlayer(): void {
    this.submitted = false;
    this.newJoueur = new Joueurs();
  }

}
