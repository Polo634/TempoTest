import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableJoueursAmComponent } from './table-joueurs-am.component';

describe('TableJoueursAmComponent', () => {
  let component: TableJoueursAmComponent;
  let fixture: ComponentFixture<TableJoueursAmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableJoueursAmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableJoueursAmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
