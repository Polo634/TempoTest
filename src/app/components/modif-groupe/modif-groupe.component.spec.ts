import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifGroupeComponent} from "./modif-groupe.component";

describe('ModifGroupeTestComponent', () => {
  let component: ModifGroupeComponent;
  let fixture: ComponentFixture<ModifGroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifGroupeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
