import {Component, OnInit} from '@angular/core';
import {distinctUntilChanged, map, tap} from "rxjs";
import {GroupesService} from "../../shared/services/groupes";
import {Groupes} from "../../models/groupes.model";
import {JoueursService} from "../../shared/services/joueurs";
import {Joueurs} from "../../models/joueurs.model";
import {Router} from "@angular/router";
import firebase from "firebase/compat";
import Swal from "sweetalert2";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";


@Component({
  selector: 'app-test',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss']
})
export class TestsComponent implements OnInit {

  displayedColumns: string[] = ['firstName','name', 'email', 'group', 'level', 'edit', 'delete' ];
  dataSource!: Joueurs[];
  joueurs?: Joueurs[];

  joueur!: any[];

  groupes!: Groupes[]

  groupe!: any[];

  Breakpoints = Breakpoints;
  currentBreakpoint:string = '';

  readonly breakpoint = this.breakpointObserver
    .observe([Breakpoints.Large, Breakpoints.Medium, Breakpoints.Small, '(min-width: 500px)' ])
    .pipe(
      tap(value => console.log(value)),
      distinctUntilChanged()
    );
  constructor(
    private joueursService: JoueursService,
    private groupesService: GroupesService,
    private router:Router,
    private breakpointObserver: BreakpointObserver

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
    this.breakpoint.subscribe(() =>
    this.breakpointChanged()
    );
  }

  private breakpointChanged(){
    if (this.breakpointObserver.isMatched(Breakpoints.Large)){
      this.currentBreakpoint = Breakpoints.Large;
    } else if (this.breakpointObserver.isMatched(Breakpoints.Medium)){
      this.currentBreakpoint = Breakpoints.Medium;
    } else if (this.breakpointObserver.isMatched(Breakpoints.Small)){
      this.currentBreakpoint = Breakpoints.Small;
    }else if (this.breakpointObserver.isMatched('(min-width: 500px)')){
      this.currentBreakpoint = '(min-width: 500px)';
    }
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

