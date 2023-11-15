import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class JugadorServiceService {

  axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });

  constructor() { }

  
}
