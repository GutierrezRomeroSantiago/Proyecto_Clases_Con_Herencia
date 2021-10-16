import { Vehiculo } from './vehiculos';
export class Patin extends Vehiculo {
  private _rodamientos: string;
  constructor(precioBase: number, tamañoRueda: number, rodamientos: string) {
    super(precioBase, tamañoRueda); // constructor de la superclase
    this._rodamientos = rodamientos;
  }
  get rodamientos() {
    return this._rodamientos;
  }
  get prueba(){
    return this._precioBase  // accedo si es protected
  }
  // sobre escribimos método
  precio(): number {
    let precio: number;
    precio = super.precio();
    if (this._rodamientos == 'tipo A') {
      precio += 0.35 * precio;
    }
    return precio;
  }

  todo(){
    let resultado: string
    resultado = `${super.todo()}, Tipo de rodamiento: ${this._rodamientos}`
    return resultado
  }
}
