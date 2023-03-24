import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterJoueurGroupeidComponent } from './ajouter-joueur-groupeid.component';

describe('AjouterJoueurGroupeidComponent', () => {
  let component: AjouterJoueurGroupeidComponent;
  let fixture: ComponentFixture<AjouterJoueurGroupeidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterJoueurGroupeidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterJoueurGroupeidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
