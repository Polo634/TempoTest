import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavAMComponent } from './sidenav-am.component';

describe('SidenavAMComponent', () => {
  let component: SidenavAMComponent;
  let fixture: ComponentFixture<SidenavAMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavAMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavAMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
