import { Component } from '@angular/core';
import { Equipo } from 'src/app/models/equipo.model';
import { Jugador } from 'src/app/models/jugador.model';
import { EquipoService } from 'src/app/services/equipo-service.service';
import { JugadorService } from 'src/app/services/jugador-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(
    public equipoService: EquipoService,
    public jugadorService: JugadorService
  ) {}

  equipos: Equipo[] = [];
  jugadores: Jugador[] = [];

  ngOnInit() {
    this.loadInfo();
  }

  async loadInfo() {
    this.equipos = await this.equipoService.getEquipos();
    this.jugadores = await this.jugadorService.getJugadores();
  }

  crearEquipo() {
    const nombre = document.getElementById('nom-equipo') as HTMLInputElement | null;
    const ciudad = document.getElementById('ciu-equipo') as HTMLInputElement | null;
    const cantidadCopas = document.getElementById('can-equipo') as HTMLInputElement | null;

    if (nombre && ciudad && cantidadCopas) {
      const equipo: Equipo = {
        nombre: nombre.value,
        ciudad: ciudad.value,
        cantidadCopasInternacionales: parseInt(cantidadCopas.value)
      };
      this.equipoService.createEquipo(equipo);
    } else {
      alert('Debe llenar todos los campos');
    }
  }

  crearJugador() {
    const nombre = document.getElementById('nom-jugador') as HTMLInputElement | null;
    const apellido = document.getElementById('ape-jugador') as HTMLInputElement | null;
    const numero = document.getElementById('num-jugador') as HTMLInputElement | null;
    const equipo = document.getElementById('equ-jugador') as HTMLInputElement | null;

    if (nombre && apellido && numero && equipo) {
      const jugador: Jugador = {
        nombres: nombre.value,
        apellidos: apellido.value,
        numero: parseInt(numero.value),
        idEquipo: parseInt(equipo.value),
        equipo: ''
      };
      this.jugadorService.createJugador(jugador);
    } else {
      alert('Debe llenar todos los campos');
    }
  }
}
