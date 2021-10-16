import { Vehiculo } from './vehiculos';
export class Bicicleta extends Vehiculo {
  private _freno: string;
  constructor(precioBase: number, tamañoRueda: number, freno: string) {
    super(precioBase, tamañoRueda); //constructor de la superclase
    this._freno = freno;
  }
  get freno() {
    return this._freno;
  }
  get prueba(){
    return this._precioBase  // accedo si es protected
  }
  // sobre escribimos método
  precio(): number {
    let precio: number;
    precio = super.precio();
    if (this._freno == 'disco') {
      precio += 0.15 * precio;
    }
    return precio;
  }

  todo(){
    let resultado: string
    resultado = `${super.todo()}, Tipo de freno: ${this._freno}`
    return resultado
  }
}
