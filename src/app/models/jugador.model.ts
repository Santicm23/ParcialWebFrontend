export class Jugador {
  constructor(
    public nombres: string,
    public apellidos: string,
    public numero: number,
    public equipo: string,
    public idEquipo: number = 0
  ) {}
}
