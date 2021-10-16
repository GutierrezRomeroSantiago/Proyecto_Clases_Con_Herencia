export class Vehiculo {
    protected _precioBase: number; // acceso subclase
    private _tamañoRueda: number;
    constructor(precioBase: number, tamañoRueda: number) {
      this._precioBase = precioBase;
      this._tamañoRueda = tamañoRueda;
    }
    get precioBase() {
      return this._precioBase;
    }
    get tamañoRueda() {
      return this._tamañoRueda;
    }
    precio(): number {
      let precio: number;
      precio = this._precioBase;
      if (this._tamañoRueda > 26) {
        precio += 0.15 * precio;
      }
      return precio;
    }
    todo() {
      return `Precio base: ${this._precioBase}, tamaño: ${this._tamañoRueda}`;
    }
  }