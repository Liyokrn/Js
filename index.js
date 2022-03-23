let Num1 = parseInt(prompt("ingrese un el primer calificacion"));
let Num2  = parseInt(prompt("ingrese el segundo calificacion"));
let Num3  = parseInt(prompt("ingrese el segundo tercer calificacion"));
let apro

   let resultado;
    resultado = Num1 + Num2 + Num3;
    let promedio = resultado / 3 ;
    if (promedio>6){
        apro = " pasaste ";
    }
    else {
        apro = " reprobaste ";
    }
    


alert("el promedio es"+ promedio + apro );

