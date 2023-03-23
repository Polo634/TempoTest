import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {JoueursService} from "../../shared/services/joueurs";
import {ActivatedRoute, Router} from "@angular/router";
import Swal from 'sweetalert2';
import {GroupesService} from "../../shared/services/groupes";
import {map} from "rxjs";
import {Groupes} from "../../models/groupes.model";
import {FormControl, Validators} from "@angular/forms";




@Component({
  selector: 'app-modif-groupe',
  templateUrl: './modif-groupe.component.html',
  styleUrls: ['./modif-groupe.component.scss']
})
export class ModifGroupeComponent implements OnInit {



  joueurId: string | null = null;
  joueur: any;
  groupes!: Groupes[];

  groupe : Groupes[] = [];

  newGroup = '';

  selectFormControl = new FormControl('', Validators.required);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private joueurService: JoueursService,
    private groupesService: GroupesService) {


  }


  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.joueurId = params['joueurId'];
      this.joueur = {...params};
    })
    this.showAllGroupes();

    this.newGroup = this.joueur.group;
  }


  supprimerJoueur(): void {
    if (this.joueur.id) {
      this.joueurService.delete(this.joueur.id)
        .then(() => {
          this.router.navigate(['/accueil']);
          Swal.fire('Joueur supprimé avec succès !');
        })
        .catch(err => console.log(err));
    }
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



  updateGroupeJoueur() {
    const data = {
      group: this.newGroup
    };

    if (this.joueur.id) {
      this.joueurService.update(this.joueur.id, data)
        .then(() => {
          this.router.navigate(['/liste-joueurs']);
          Swal.fire('Groupe modifié avec succès !')
        })
        .catch(err => console.log(err));
    }
  }
}

