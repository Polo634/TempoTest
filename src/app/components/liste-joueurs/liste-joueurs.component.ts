import {Component, Input, OnInit, Output} from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms'
import { Joueurs} from "../../models/joueurs.model";
import { JoueursService} from "../../shared/services/joueurs";
import {map} from "rxjs";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Groupes} from "../../models/groupes.model";
import {GroupesService} from "../../shared/services/groupes";
import firebase from "firebase/compat";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-liste-joueurs',
  templateUrl: './liste-joueurs.component.html',
  styleUrls: ['./liste-joueurs.component.scss']
})
export class ListeJoueursComponent implements OnInit {

  joueur: any;

  joueurs?: Joueurs[];

  groupes!: Groupes[]


  constructor(
    private joueurService : JoueursService,
    private groupesService: GroupesService,
    private modalService: NgbModal,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.showAllJoueurs();
    this.showAllGroupes();
  }



  showAllJoueurs(): void {
    this.joueurService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({id: c.payload.doc.id, ...c.payload.doc.data()})
        )
      )
    ).subscribe(data => {
      this.joueurs = data
    })
  }


  showDetailJoueur(joueurId: string | undefined) {
    this.joueurService.getById(joueurId).subscribe((doc: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData> | null) => {
      this.router.navigate(['/joueur'], {queryParams: {id: joueurId, ...doc?.data()}});
      console.log(doc?.data())
    });
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

  ajouterJoueur() {
    this.router.navigate(['/ajouter-joueur']);
  }

  supprimerJoueur(joueurId: string | undefined): void {
    if (joueurId) {
      this.joueurService.delete(joueurId)
        .then(() => {
          this.router.navigate(['/accueil']);
          Swal.fire('Joueur supprimé avec succès !');
        })
        .catch(err => console.log(err));
    }
  }

  modifGroupeJoueur(joueurId: string | undefined) {
    this.joueurService.getById(joueurId).subscribe((doc: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData> | null) => {
      this.router.navigate(['/modif-groupe'], {queryParams: {id: joueurId, ...doc?.data()}});
      console.log(doc?.data())
    });
  }

}
