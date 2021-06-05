export class Airport {
  name: string;
  icao: string;

  constructor(name: string) {
    this.name = name;
    this.icao = name;
  }
}
