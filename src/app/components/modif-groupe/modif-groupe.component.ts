import {Component, OnInit} from '@angular/core';
import {JoueursService} from "../../shared/services/joueurs";
import {ActivatedRoute, Router} from "@angular/router";
import Swal from 'sweetalert2';
import {GroupesService} from "../../shared/services/groupes";
import {map} from "rxjs";
import {Groupes} from "../../models/groupes.model";
import {FormControl, Validators} from "@angular/forms";
import {FunctionsService} from "../../shared/services/functionsService";




@Component({
  selector: 'app-modif-groupe',
  templateUrl: './modif-groupe.component.html',
  styleUrls: ['./modif-groupe.component.scss']
})
export class ModifGroupeComponent implements OnInit {



  joueurId: string | null = null;
  joueur: any;
  newGroup = '';

  selectFormControl = new FormControl('', Validators.required);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private joueurService: JoueursService,
    public functionsService: FunctionsService) {


  }


  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.joueurId = params['joueurId'];
      this.joueur = {...params};
    })
    this.functionsService.showAllGroupes();
    this.newGroup = this.joueur.group;
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

