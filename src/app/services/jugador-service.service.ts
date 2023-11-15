import { Injectable } from '@angular/core';
import axios from 'axios';
import { Jugador } from '../models/jugador.model';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 5000,
  });

  constructor() {}

  async getJugadores(): Promise<Array<Jugador>> {
    const response = await this.axiosInstance.get('/jugadores');
    return response.data;
  }

  async createJugador(jugador: Jugador): Promise<Jugador> {
    const { equipo, ...jugadorNuevo } = jugador;
    const response = await this.axiosInstance.post('/jugador', jugadorNuevo);
    return response.data;
  }
}
