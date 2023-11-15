import { Injectable } from '@angular/core';
import axios from 'axios';
import { Equipo } from '../models/equipo.model';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  
  axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 5000,
  });

  constructor() {}

  async getEquipos(): Promise<Array<Equipo>> {
    const response = await this.axiosInstance.get('/equipos');
    return response.data;
  }

  async createEquipo(equipo: Equipo): Promise<Equipo> {
    const response = await this.axiosInstance.post('/equipo', equipo);
    return response.data;
  }
}
