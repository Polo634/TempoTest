import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {map} from "rxjs";
import {GroupesService} from "../../shared/services/groupes";
import {Groupes} from "../../models/groupes.model";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {JoueursService} from "../../shared/services/joueurs";
import {Joueurs} from "../../models/joueurs.model";


@Component({
  selector: 'app-test',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss']
})
export class TestsComponent implements OnInit {

  dataSource = new MatTableDataSource<Joueurs>();
  displayedColumns: string[] = ['nom', 'prenom', 'niveau', 'clicks'];

  groupes! : Groupes[];
  joueurs!: Joueurs[];
  groupe!: any[]
  joueur!: any[]

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private groupesService: GroupesService,
    private joueursService: JoueursService
  ) {
    this.joueursService.joueur.subscribe((docs: any[]) => {
      this.joueur = docs;

    });
    this.groupesService.groupe.subscribe((docs: any[]) => {
      this.groupe = docs;
    });
  }

  ngOnInit(): void {
    this.showAllGroupes();
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
      this.joueurs = data
    })
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
  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource)
  }

}

