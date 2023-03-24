import {Component, Input, OnInit} from '@angular/core';
import {JoueursService} from "../../shared/services/joueurs";
import {Joueurs} from "../../models/joueurs.model";
import {map} from "rxjs";
import firebase from "firebase/compat";
import {Router} from "@angular/router";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {GroupesService} from "../../shared/services/groupes";
import {Groupes} from "../../models/groupes.model";
import {MatTableDataSource} from "@angular/material/table";
import Swal from "sweetalert2";


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit{

  joueurs?: Joueurs[];

  joueur!: any[];

  currentDate = new Date();
  faPlus = faPlus;

  groupes!: Groupes[]

  groupe!: any[];


  constructor(
    private joueursService: JoueursService,
    private groupesService: GroupesService,
    private router:Router,

  ) {
    this.joueursService.joueur.subscribe((docs: any[]) => {
      this.joueur = docs;

    });
    this.groupesService.groupe.subscribe((docs: any[]) => {
      this.groupe = docs;
    });


  }


  ngOnInit(): void {
    this.showAllJoueurs();
    this.showAllGroupes();

  }

  showAllJoueurs(): void {
    this.joueursService.getAll().snapshotChanges().pipe(
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
    this.joueursService.getById(joueurId).subscribe((doc: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData> | null) => {
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


  showDetailGroupe(groupId: string | undefined) {
    this.groupesService.getById(groupId).subscribe((doc: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData> | null) => {
      this.router.navigate(['/groupe'], {queryParams: {id: groupId, ...doc?.data()}});
      console.log(doc?.data())
    });
  }

  supprimerJoueur(joueurId: string | undefined): void {
    if (joueurId) {
      this.joueursService.delete(joueurId)
        .then(() => {
          this.router.navigate(['/accueil']);
          Swal.fire('Joueur supprimé avec succès !');
        })
        .catch(err => console.log(err));
    }
  }

  modifGroupeJoueur(joueurId: string | undefined) {
    this.joueursService.getById(joueurId).subscribe((doc: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData> | null) => {
      this.router.navigate(['/modif-groupe'], {queryParams: {id: joueurId, ...doc?.data()}});
      console.log(doc?.data())
    });
  }

  ajouterJoueur(groupId: string |undefined) {
    this.groupesService.getById(groupId).subscribe((doc: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData> | null) => {
      this.router.navigate(['/ajouter-joueur-groupeid'], {queryParams: {id: groupId, ...doc?.data()}});
      console.log(doc?.data())
    });
  }

}
