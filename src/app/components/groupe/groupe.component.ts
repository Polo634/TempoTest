import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GroupesService} from "../../shared/services/groupes";
import {map} from "rxjs";
import firebase from "firebase/compat";
import {JoueursService} from "../../shared/services/joueurs";
import {Joueurs} from "../../models/joueurs.model";

@Component({
  selector: 'app-groupe',
  templateUrl: './groupe.component.html',
  styleUrls: ['./groupe.component.scss']
})
export class GroupeComponent implements OnInit {

  id: string | null = null;
  groupe: any;
  joueurs?: Joueurs[];

  joueur?: any[];

  constructor(private route: ActivatedRoute, private router: Router, private groupesService: GroupesService, private joueursService: JoueursService) {

  }

  ngOnInit(): void {

    this.showAllJoueurs();
    this.route.queryParams.subscribe(params => {
      this.id = params['groupId'];
      this.groupe = {...params};
      console.log(this.groupe)
  })

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

}


