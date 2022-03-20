/*let num1= parseInt(prompt("introduce un numero"));
let num2= parseInt(prompt("dame otro"));   

function sumar(num1, num2) {   
    let resultado= num1+num2;
    return
}


const suma=(num1, num2)=> resultado=num1 + num2;

let res= suma(num1, num2);
document.write("El resultado es:"+ res);

//aun que no considero correcto poner las etiquetas html dentro del objeto lo hare con el fin de facilitar la captura de evidencia

const imprimirFrase= nombre=> ` <br>  Hola ${nombre} </br>`;

let nombre= '<br> juancharlie </br>';

document.write( imprimirFrase(nombre ));


const carro={
    color: 'negro',
    marca: 'la toyotona',
    funciones:{
        acelera: 160, 
        frena: 0

    }
}

console.log( color);
console.log(carro.funciones);
console.log(carro);

const {colorCarro}= carro;

const {color} =carro;
console.log(color);  */

fetch ('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
.then(res => res.json())
.then ( data => 
    {
       data.result.forEach(element => {
            console.log(element)
        });
        console.log(data)
    })
    .catch ( error => console.log(error));
   /*
    const obtenerpokemon = async() => {
        try {
            const result= await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200');
            const data= await result.json();
            console.log (data.result);
            data.result.forEach(element => {
                console.log(element.name);
            });
        } catch (error){
            console.log(error);
        }
    }
obtenerpokemon();
*/