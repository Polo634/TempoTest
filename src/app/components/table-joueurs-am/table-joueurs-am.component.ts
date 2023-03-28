import {Component, OnInit} from '@angular/core';
import {Joueurs} from "../../models/joueurs.model";
import {JoueursService} from "../../shared/services/joueurs";
import {Router} from "@angular/router";
import Swal from "sweetalert2";
import firebase from "firebase/compat";
import {GroupesService} from "../../shared/services/groupes";
import {map} from "rxjs";
import {Groupes} from "../../models/groupes.model";
import {MatTable} from "@angular/material/table";


@Component({
  selector: 'app-table-joueurs-am',
  templateUrl: './table-joueurs-am.component.html',
  styleUrls: ['./table-joueurs-am.component.scss']
})
export class TableJoueursAmComponent implements OnInit {

  displayedColumns: string[] = ['firstName','name', 'email', 'group', 'level', 'edit', 'delete' ];
  dataSource!: Joueurs[];

  groupes!: Groupes[];


  constructor(
    private joueursService: JoueursService,
    private router: Router,
    private groupesService: GroupesService) {

  }

  ngOnInit(): void {
    this.showAllJoueurs();
  }

  showAllJoueurs(): void {
    this.joueursService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({id: c.payload.doc.id, ...c.payload.doc.data()})
        )
      )
    ).subscribe(data => {
      this.dataSource = data
    })
  }

  ajouterJoueur() {
    this.router.navigate(['/ajouter-joueur']);
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

  showDetailJoueur(joueurId: string | undefined) {
    this.joueursService.getById(joueurId).subscribe((doc: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData> | null) => {
      this.router.navigate(['/joueur'], {queryParams: {id: joueurId, ...doc?.data()}});
      console.log(doc?.data())
    });
  }

  showDetailGroupe(groupId: string | undefined) {
    this.groupesService.getById(groupId).subscribe((doc: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData> | null) => {
      this.router.navigate(['/groupe'], {queryParams: {id: groupId, ...doc?.data()}});
      console.log(doc?.data())
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
      this.dataSource = this.dataSource.filter(joueur =>
        joueur.name.toLowerCase().includes(filterValue)
      );
    }

    reload(){
    window.location.reload();
    }
}
