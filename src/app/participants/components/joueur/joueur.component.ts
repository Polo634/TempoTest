import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FunctionsService} from "../../../core/services/functionsService";



@Component({
  selector: 'app-joueur',
  templateUrl: './joueur.component.html',
  styleUrls: ['./joueur.component.scss']
})
export class JoueurComponent implements OnInit {

  joueurId: string | null = null;

  constructor(
    public functionsService: FunctionsService,
    public route: ActivatedRoute) {

  }


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.joueurId = params['joueurId'];
      this.functionsService.jr = {...params};
    })
    this.functionsService.showAllGroupes();
      }

}

