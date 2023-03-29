import {map} from "rxjs";
import firebase from "firebase/compat";
import Swal from "sweetalert2";
import {Injectable} from "@angular/core";
import {JoueursService} from "./joueurs";
import {GroupesService} from "./groupes";
import {Joueurs} from "../../models/joueurs.model";
import {Groupes} from "../../models/groupes.model";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root',
})

export class FunctionsService {

  joueurs?: Joueurs[];

  joueur!: any[];

  jr!: any;

  groupes!: Groupes[]

  groupe!: any[];

  gpe!: any;

  constructor(
    private joueursService: JoueursService,
    private groupesService: GroupesService,
    private router: Router) {
    this.joueursService.joueur.subscribe((docs: any[]) => {
      this.joueur = docs;

    });
    this.groupesService.groupe.subscribe((docs: any[]) => {
      this.groupe = docs;
    });
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

supprimerJoueurId(joueurId: string | undefined): void {
  if (joueurId) {
    this.joueursService.delete(joueurId)
      .then(() => {
        this.router.navigate(['/accueil']);
        Swal.fire('Joueur supprimé avec succès !');
      })
      .catch(err => console.log(err));
  }
}

  supprimerJoueur(): void {
    if (this.jr.id) {
      this.joueursService.delete(this.jr.id)
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

ajouterJoueurGroupe(groupId: string |undefined) {
  this.groupesService.getById(groupId).subscribe((doc: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData> | null) => {
    this.router.navigate(['/ajouter-joueur-groupeid'], {queryParams: {id: groupId, ...doc?.data()}});
    console.log(doc?.data())
  });
}

  ajouterJoueur() {
    this.router.navigate(['/ajouter-joueur']);
  }

}
