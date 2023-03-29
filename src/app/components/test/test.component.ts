import { Component, OnInit } from '@angular/core';
import {FunctionsService} from "../../shared/services/functionsService";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(public functionsService: FunctionsService) { }

  ngOnInit(): void {
    this.functionsService.showAllJoueurs();
    this.functionsService.showAllGroupes();
  }

}
