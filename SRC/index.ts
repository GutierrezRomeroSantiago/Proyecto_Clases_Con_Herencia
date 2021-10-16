import { Vehiculo } from './classes/vehiculos';
import { menuPral } from './view/menuPral'
import { leerTeclado } from './view/entradaTeclado'
import { Patin } from './classes/patin';
import { Bicicleta } from './classes/bicicleta';


/*let vehi: Vehiculo;
let bici: Bicicleta;
let pati: Patin;*/

let automoviles: Array<Vehiculo> = new Array<Vehiculo>();

const main = async () => {
    let n: number
    do {

        n = await menuPral()
        switch(n){
            case 1:
                console.log("CREAR OBJETOS")
                //vehi = new Vehiculo(500, 28);

                //bici = new Bicicleta(500, 28, 'disco');

                //pati = new Patin(400, 10, 'tipo A');

                automoviles[0] = new Vehiculo(100, 28);
                automoviles[1] = new Vehiculo(350, 10);
                automoviles[2] = new Bicicleta(400, 29, 'disco');
                automoviles[3] = new Bicicleta(150, 25, 'disco');
                automoviles[4] = new Patin(90, 9, 'tipo B');
                automoviles[5] = new Patin(100, 12.5, 'tipo A');
                console.log("¡¡¡OBJETOS CREADOS CON EXITO!!!")
                break
            case 2:
                console.log("LISTAR CONTENIDO ARRAY")
                for (let b of automoviles) {
                    console.log(b instanceof Bicicleta);
                    console.log(`${b.todo()}, precio: ${b.precio()}`)
                }
                break
            case 3:
                console.log("MODIFICAR INFORMACION OBJETO DE UN ARRAY")
                let n2: number
                let pb: number
                let tr: number
                let fr: string
                let rd: string
                n2 =  parseInt( await leerTeclado('INDICA EL OBJETO DEL ARRAY QUE QUIERES MODIFICAR'))
                if (n2 == 0) {
                    pb =  parseInt( await leerTeclado('INDICA EL NUEVO PRECIO BASE'))
                    tr =  parseInt( await leerTeclado('INDICA EL NUEVO TAMAÑO DE RUEDA'))
                    automoviles[0] = new Vehiculo(pb, tr)
                    console.log('¡¡¡Elemento modificado con exito!!!')
                 }
                 if (n2 == 1) {
                    pb =  parseInt( await leerTeclado('INDICA EL NUEVO PRECIO BASE'))
                    tr =  parseInt( await leerTeclado('INDICA EL NUEVO TAMAÑO DE RUEDA'))
                    automoviles[1] = new Vehiculo(pb, tr)
                    console.log('¡¡¡Elemento modificado con exito!!!')
                 }
                 if (n2 == 2) {
                    pb =  parseInt( await leerTeclado('INDICA EL NUEVO PRECIO BASE'))
                    tr =  parseInt( await leerTeclado('INDICA EL NUEVO TAMAÑO DE RUEDA'))
                    fr =   await leerTeclado('INDICA EL TIPO DE FRENO')
                    automoviles[2] = new Bicicleta(pb, tr, fr)
                    console.log('¡¡¡Elemento modificado con exito!!!')
                 }
                 if (n2 == 3) {
                    pb =  parseInt( await leerTeclado('INDICA EL NUEVO PRECIO BASE'))
                    tr =  parseInt( await leerTeclado('INDICA EL NUEVO TAMAÑO DE RUEDA'))
                    fr =   await leerTeclado('INDICA EL TIPO DE FRENO')
                    automoviles[3] = new Bicicleta(pb, tr, fr)
                    console.log('¡¡¡Elemento modificado con exito!!!')
                 }
                 if (n2 == 4) {
                    pb =  parseInt( await leerTeclado('INDICA EL NUEVO PRECIO BASE'))
                    tr =  parseInt( await leerTeclado('INDICA EL NUEVO TAMAÑO DE RUEDA'))
                    rd =   await leerTeclado('INDICA EL TIPO DE rodamiento')
                    automoviles[4] = new Patin(pb, tr, rd)
                    console.log('¡¡¡Elemento modificado con exito!!!')
                 }
                 if (n2 == 5) {
                    pb =  parseInt( await leerTeclado('INDICA EL NUEVO PRECIO BASE'))
                    tr =  parseInt( await leerTeclado('INDICA EL NUEVO TAMAÑO DE RUEDA'))
                    rd =   await leerTeclado('INDICA EL TIPO DE rodamiento')
                    automoviles[5] = new Patin(pb, tr, rd)
                    console.log('¡¡¡Elemento modificado con exito!!!')
                 }
                break
            case 4:
                console.log("BORRAR OBJETO DE UN ARRAY")
                let n3:number
                n3 =  parseInt( await leerTeclado('INDICA EL OBJETO DEL ARRAY QUE QUIERES ELIMINAR'))
                automoviles.splice(n3, 1)
                break
            case 5:
                console.log("VER INFO DE UN OBJETO")
                let n1: number
                n1 =  parseInt( await leerTeclado('INDICA EL OBJETO DEL ARRAY QUE QUIERES VISUALIZAR'))
                console.log("Elemento seleccionado: ", automoviles[n1])
                 break
            case 0:
                console.log('\nAdios')
                break
            default:
                console.log("Opción incorrecta")
                break
        }
    }while (n != 0)
}
main()
