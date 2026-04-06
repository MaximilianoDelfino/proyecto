let saludar = document.getElementById('saludo')
let holaNom = document.getElementById('holaNomb')
let reconocedorDato = document.getElementById('lectorDato')
let hazCuenta = document.getElementById('haceCuenta')
let sumando = document.getElementById('sumar')
let restando = document.getElementById('resta')
let multiplicando = document.getElementById('multiplicar')
let dividiendo = document.getElementById('dividir')
let clasificando = document.getElementById('clasificar')
let verificaPar = document.getElementById('parVerifica')
let verificaEdad = document.getElementById('verificarEdad')
let comparacion = document.getElementById('comparar')
let calculoRectangulo = document.getElementById('periArea')
let calcularTemp = document.getElementById('calcularTemp')

 saludar?.addEventListener("click",function holaMundo(){
    alert("hola mundo");
 })

holaNom?.addEventListener("click", function(){
    let nomActual = document.getElementById('nombre').value;
    if (nomActual === "") {
        document.getElementById("salud").innerHTML= "Por favor introduce tu nombre";  
    } else {
        document.getElementById("salud").innerHTML= "Hola, "+ nomActual +"!";
    }
})

reconocedorDato?.addEventListener("click", function(){
    let datoActual= document.getElementById('dato').value;
    let tipoDato = typeof datoActual;
    let esNumero;
    if (isNaN(datoActual) || datoActual === "") {
        esNumero = "No es número";
    } else {
        esNumero= "Es un número";
    } 
    let mensajeDato = `Tipo: ${tipoDato} - ${esNumero}`;
    document.getElementById("esNum").innerHTML = mensajeDato;
})

hazCuenta?.addEventListener("click", function(){
    let resultadoCuenta = (25*4)-10;
    console.log(resultadoCuenta);
    document.getElementById("reCuenta").innerHTML = resultadoCuenta;
})

sumando?.addEventListener("click", function(){
    let n1 = Number(document.getElementById('num1').value);
    let n2 = Number(document.getElementById('num2').value);
    let resultadoSumando= n1 + n2;
    document.getElementById("resultadoSuma").innerHTML = resultadoSumando;
})

restando?.addEventListener("click", function(){
    let n1 = Number(document.getElementById('num1').value);
    let n2 = Number(document.getElementById('num2').value);
    let resultadoRestando = n1 - n2;
    if (resultadoRestando > 0){
        document.getElementById('resultadoResta').innerHTML = resultadoRestando + " (positivo)";
    };
    if (resultadoRestando < 0){
        document.getElementById('resultadoResta').innerHTML = resultadoRestando + " (negativo)";
    };
    if (resultadoRestando === 0){
        document.getElementById('resultadoResta').innerHTML = resultadoRestando + " (cero)";
    };
})

multiplicando?.addEventListener("click",function(){
    let n1 = Number(document.getElementById('num1').value);
    let n2 = Number(document.getElementById('num2').value);
    let resultadoMultiplicando = n1 * n2;   
    document.getElementById('resultadoMultiplicacion').innerHTML = resultadoMultiplicando;
    console.log(n1*1); 
    console.log(n1*2); 
    console.log(n1*3); 
    console.log(n1*4); 
    console.log(n1*5); 
})

dividiendo?.addEventListener("click",function(){
    let n1 = Number(document.getElementById('num1').value);
    let n2 = Number(document.getElementById('num2').value);
    let resultadoDividiendo = n1 / n2;   
    if (resultadoDividiendo !== Infinity){
        document.getElementById('resultadoDivision').innerHTML = resultadoDividiendo.toFixed(2);
    } else {
        document.getElementById('resultadoDivision').innerHTML = "No se puede dividir por cero.";
    };
})

clasificando?.addEventListener("click", function(){
    let n1 = Number(document.getElementById('num1').value);
        if (n1 > 0){
            document.getElementById('resultadoIdentificacion').innerHTML = n1 + " es positivo";
        };
        if (n1 < 0){
            document.getElementById('resultadoIdentificacion').innerHTML = n1 + " es negativo";
        };
        if (n1 === 0){
            document.getElementById('resultadoIdentificacion').innerHTML = n1 + " es cero";
        };
})

verificaPar?.addEventListener("click",function(){
    let n1 = Number(document.getElementById('num1').value);
    if (n1 % 2 !== 0){
        document.getElementById('parNoPar').innerHTML = n1 + ' no es par.';
    } else {
        document.getElementById('parNoPar').innerHTML = n1 + ' es par.';
    };
})

verificaEdad?.addEventListener("click",function(){
    let edad = Number(document.getElementById('numEdad').value);
    let nombreActual = document.getElementById('nombre').value;
    if (18-edad > 0 && edad > 0 && edad < 120){
        let menor = 18-edad;
        document.getElementById('esMayor').innerHTML = nombreActual + ' no es mayor de edad, le faltan ' + menor + ' años.';
    };
    if (18-edad <= 0 && edad > 0 && edad < 120) {
        document.getElementById('esMayor').innerHTML = nombreActual + ' es mayor de edad.';
    };
    if (edad >= 120 || edad < 0) {
        document.getElementById('esMayor').innerHTML ='Por favor, introduzca una edad real.';
    }
})

comparacion?.addEventListener("click",function(){
    let n1 = Number(document.getElementById('num1').value);
    let n2 = Number(document.getElementById('num2').value);
    if (n1>n2) {
        document.getElementById('comparado').innerHTML = n1 + ' es mayor que ' + n2;
    };
    if (n1<n2) {
        document.getElementById('comparado').innerHTML = n2 + ' es mayor que ' + n1;
    };
    if (n1===n2) {
        document.getElementById('comparado').innerHTML = n1 + ' es igual a ' + n2;
    };      
})

calculoRectangulo?.addEventListener("click",function (){
    let n1 = Number(document.getElementById('base').value);
    let n2 = Number(document.getElementById('altura').value);
    let area = n1 * n2;
    let perimetro = 2 * (n1 + n2);
    let mensajeRectangulo = 'El área de su rectángulo es ' + area + ' y su perimetro es ' + perimetro;
    document.getElementById('resultadoRectangulo').innerHTML = mensajeRectangulo;
})

calcularTemp?.addEventListener("click", function(){
    let n1 = Number(document.getElementById('celsius').value);
    let tempFarenheit = n1 * (9/5) + 32;
    let tempKelvin = n1 + 273.15;
    document.getElementById('farenKelvin').innerHTML = 'Eso equivale a ' + tempFarenheit + ' grados farenheit o ' + tempKelvin + ' grados Kelvin';
})