import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Joueurs} from "../../models/joueurs.model";
import {Groupes} from "../../models/groupes.model";
import {JoueursService} from "../../shared/services/joueurs";
import {GroupesService} from "../../shared/services/groupes";
import {ActivatedRoute} from "@angular/router";
import {map} from "rxjs";

@Component({
  selector: 'app-ajouter-joueur-groupeid',
  templateUrl: './ajouter-joueur-groupeid.component.html',
  styleUrls: ['./ajouter-joueur-groupeid.component.scss']
})
export class AjouterJoueurGroupeidComponent implements OnInit {


  angularForm!: FormGroup;

  newJoueur: Joueurs = new Joueurs();
  submitted =  false;
  groupes!: Groupes[];

  groupe!: any

  id!: string;


  constructor(
    private formBuilder: FormBuilder,
    private joueursService: JoueursService,
    private groupesService: GroupesService,
    private route:ActivatedRoute,
  ) {

  }

  ngOnInit(): void {
    this.angularForm = this.formBuilder.group({
        name: ['', Validators.required],
        firstName: ['', Validators.required],
        group: ['', Validators.required],
        email: ['', Validators.required],
        level: [1, Validators.required]
      }
    )
    this.showAllGroupes();
    this.route.queryParams.subscribe(params => {
      this.id = params['groupId'];
      this.groupe = {...params};
      console.log(this.groupe)
    })

    this.newJoueur.group = this.groupe.groupId;

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

  showAllGroupes(): void {
    this.groupesService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({id: c.payload.doc.id, ...c.payload.doc.data()})
        )
      )
    ).subscribe(data => {
      this.groupes = data
    })
  }
}
