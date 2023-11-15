import { Component, Input } from '@angular/core';
import { Equipo } from 'src/app/models/equipo.model';

@Component({
  selector: 'app-equipo-item',
  templateUrl: './equipo-item.component.html',
  styleUrls: ['./equipo-item.component.css']
})
export class EquipoItemComponent {
  @Input() equipo: Equipo = new Equipo('', '', 0);

  constructor() {}
}
