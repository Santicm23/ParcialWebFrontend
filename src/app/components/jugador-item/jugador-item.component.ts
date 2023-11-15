import { Component, Input } from '@angular/core';
import { Jugador } from 'src/app/models/jugador.model';

@Component({
  selector: 'app-jugador-item',
  templateUrl: './jugador-item.component.html',
  styleUrls: ['./jugador-item.component.css']
})
export class JugadorItemComponent {
  @Input() jugador: Jugador = new Jugador('', '', 0, '');

  constructor() {}
}
