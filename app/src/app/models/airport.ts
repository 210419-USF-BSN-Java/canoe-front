import { Deserializable } from './deserializable';
export class Airport implements Deserializable {
  public name: string = '';
  public icao: string = '';

  getName() {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }

  getIcao() {
    return this.icao;
  }

  setIcao(icao: string) {
    this.icao = icao;
  }

  deserialize(input: any) {
    Object.assign(this, input);
    this.name = input.results[0].name;
    return this;
  }
}
