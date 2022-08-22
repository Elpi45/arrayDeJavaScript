

// // Genere un objeto, luego lo introduje en el simulador como -> div1.precio, para tomar el valor (136) desde 
// //el objeto 


// class Divisa {
//     constructor (nombre, precio){
//         this.nombre = nombre.toUpperCase()
//         this.precio = Number(precio)
//      }
//   }

//   const div1 = new Divisa("Dolar", 136)
  
//  const divisas = [];
//    divisas.push(new Divisa("Dolar", 136))
//    for (const dato of divisas) {
//        console.log(dato.nombre)
//        console.log(dato.precio)
//    }
  
 
//   let respuesta = prompt("vas a comprar dolares si o no")

//   while(respuesta != "no"){

//   const suma = (a,b) => a + b
//   const imp = x => x * 0.70
//   const precioFinal = (a,b) => a * b

//   let precioDolar = div1.precio

//   let precioDolarUsuario = Number (prompt("Ingrese cantidad de dolares a comprar"))
//   let nuevoPrecioImp = suma(precioDolar, imp(precioDolar))
//   alert("Precio a la fecha por un dolar, incluido impuestos " + nuevoPrecioImp)
//   let precioFinalUsuario = precioFinal (nuevoPrecioImp, precioDolarUsuario)
//   alert ("TOTAL A PAGAR "+precioFinalUsuario)

//        respuesta = prompt(" otra operacion de compra o no")
//    }




// Este es un Array de dvisas siguiendo el ejemplo de la profe, pero no interactua con el Simulador


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

  // Interactuando con HTML DOM


  const Listamonedas = monedas.map(dato => dato.nombre)

            //Listamonedas = ["Dolar", "Euro", "Libra", "Real", "Uruguayo", "Chileno"]

  let lista = document.getElementById("lista")

for (const mone of Listamonedas) {
  let li = document.createElement("li")
  li.innerHTML = mone
  lista.appendChild(li)
}

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




//   // Este genera un array por cada operacion

//   let respuesta = prompt("vas a comprar dolares si o no")
//    while(respuesta != "no"){
//    const suma = (a,b) => a + b
//    const imp = x => x * 0.70
//    const precioFinal = (a,b) => a * b
//    let precioDolar = 136
//    let precioDolarUsuario = Number (prompt("Ingrese cantidad de dolares a comprar"))
//    let nuevoPrecioImp = suma(precioDolar, imp(precioDolar))
//    alert("Precio a la fecha por un dolar " + nuevoPrecioImp)
//    let precioFinalUsuario = precioFinal (nuevoPrecioImp, precioDolarUsuario)
//    alert ("TOTAL A PAGAR "+precioFinalUsuario)


//    class Divisa {
//      constructor(nombre, precio){
//          this.nombre = nombre.toUpperCase();
//          this.precio = Number(precio);
         
//      }
//    }
//    const operaciones = [];
//    operaciones.push(new Divisa("Dolar", precioFinalUsuario))
//    console.log(operaciones)


//    respuesta = prompt(" otra operacion de compra o no")
//   }