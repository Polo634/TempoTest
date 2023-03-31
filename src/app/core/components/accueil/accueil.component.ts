import {Component, OnInit} from '@angular/core';
import {FunctionsService} from "../../services/functionsService";


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit{

  currentDate = new Date();


  constructor(
    public functionsService: FunctionsService
  ) {}


  ngOnInit(): void {
    this.functionsService.showAllJoueurs();
    this.functionsService.showAllGroupes();
  }


}
