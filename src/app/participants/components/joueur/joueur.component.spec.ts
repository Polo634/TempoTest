import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoueurComponent} from "./joueur.component";

describe('PlayerComponent', () => {
  let component: JoueurComponent;
  let fixture: ComponentFixture<JoueurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoueurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
