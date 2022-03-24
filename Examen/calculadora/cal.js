let num1,num2,res;
//operacione
const sum = (num1,num2) =>{
    num1=parseFloat(document.getElementById("num1").value);//
    num2=parseFloat(document.getElementById("num2").value);
        res = num1+num2;

        document.getElementById("res").innerHTML = "resultado es: " + res;}

const rest = (num1,num2) =>{
    num1=parseFloat(document.getElementById("num1").value);//
    num2=parseFloat(document.getElementById("num2").value);

    res = num1-num2;

    document.getElementById("res").innerHTML = "resultado es: " + res;}

const multip = (num1,num2) =>{
    num1=parseFloat(document.getElementById("num1").value);//
    num2=parseFloat(document.getElementById("num2").value);

    res = num1*num2;

    document.getElementById("res").innerHTML = "resultado es: " + res;}

const div = (num1,num2) =>{
    num1=parseFloat(document.getElementById("num1").value);//
    num2=parseFloat(document.getElementById("num2").value);

    res = num1/num2;

    document.getElementById("res").innerHTML = "resultado es: " + res;}