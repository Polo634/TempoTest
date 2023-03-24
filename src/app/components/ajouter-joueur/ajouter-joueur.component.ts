import { Component, OnInit } from '@angular/core';
import {Joueurs} from "../../models/joueurs.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {JoueursService} from "../../shared/services/joueurs";
import {Groupes} from "../../models/groupes.model";
import {map} from "rxjs";
import {GroupesService} from "../../shared/services/groupes";

@Component({
  selector: 'app-ajouter-joueur',
  templateUrl: './ajouter-joueur.component.html',
  styleUrls: ['./ajouter-joueur.component.scss']
})
export class AjouterJoueurComponent implements OnInit {
  angularForm!: FormGroup;

  newJoueur: Joueurs = new Joueurs();
  submitted =  false;
  groupes!: Groupes[];

  selectFormControl = new FormControl('', Validators.required);

  newGroup = '';

  constructor(private formBuilder: FormBuilder, private joueursService: JoueursService, private groupesService: GroupesService) {

  }

  ngOnInit(): void {
    this.angularForm = this.formBuilder.group({
      name: ['', Validators.required],
      firstName: ['', Validators.required],
      group: ['', Validators.required],
      email: ['', Validators.required]
      }
    )
    this.showAllGroupes();


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
