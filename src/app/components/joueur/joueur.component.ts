import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {JoueursService} from "../../shared/services/joueurs";
import {ActivatedRoute, Router} from "@angular/router";
import Swal from 'sweetalert2';
import {GroupesService} from "../../shared/services/groupes";
import {map} from "rxjs";
import {Groupes} from "../../models/groupes.model";
import firebase from "firebase/compat";



@Component({
  selector: 'app-joueur',
  templateUrl: './joueur.component.html',
  styleUrls: ['./joueur.component.scss']
})
export class JoueurComponent implements OnInit {


  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  joueurId: string | null = null;
  joueur: any;
  groupes!: Groupes[]



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

  modifGroupeJoueur(joueurId: string | undefined) {
    this.joueurService.getById(joueurId).subscribe((doc: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData> | null) => {
      this.router.navigate(['/modif-groupe'], {queryParams: {id: joueurId, ...doc?.data()}});
      console.log(doc?.data())
    });
  }
}

