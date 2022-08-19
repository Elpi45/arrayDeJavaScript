
class Moneda {
    constructor (nombre, precio){
        this.nombre = nombre.toUpperCase()
        this.precio = Number(precio)
     }

     sumaImp() {this.precio *= 1.70} 
  }

  
const monedas = [];

let monUsuario = prompt ("Ingresa Moneda")
let precioUsuario = Number (prompt("Ingresa precio de la moneda"))
       
    monedas.push(new Moneda (monUsuario, precioUsuario)) 
    monedas.push(new Moneda ("Dolar", 136))
    monedas.push(new Moneda ("Euro", 137))
    monedas.push(new Moneda ("Libra", 164 ))
    monedas.push(new Moneda ("Real",27))


for (const moneda of monedas)
          moneda.sumaImp()
  console.log(monedas)

  //Reduce (para sumar y obtener el valor total de todas las monedas)

const valorInicial = 0 
                                                                                    
const precioFinal = monedas.reduce((acc, el)=> acc + el.precio, valorInicial);

console.log(precioFinal)

  //se mapeo para actualizar precios

 const preciosActualizados = monedas.map((datos)=> {
     return{
        precio: datos.precio * 1.10
     }
 })

console.log(preciosActualizados)

