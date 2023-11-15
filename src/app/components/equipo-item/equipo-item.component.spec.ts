import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoItemComponent } from './equipo-item.component';

describe('EquipoItemComponent', () => {
  let component: EquipoItemComponent;
  let fixture: ComponentFixture<EquipoItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquipoItemComponent]
    });
    fixture = TestBed.createComponent(EquipoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
