let saludar = document.getElementById('saludo')

if (saludar) {
    saludar.addEventListener("click",function holaMundo(){
        alert("hola mundo");
    })
}


let holaNom = document.getElementById('holaNomb')

if (holaNom) {
    holaNom.addEventListener("click", function(){
        let nomActual = document.getElementById('nombre').value;

        if (nomActual === "") {
            document.getElementById("salud").innerHTML= "Por favor introduce tu nombre";  
        } else {
            document.getElementById("salud").innerHTML= "Hola, "+ nomActual +"!";
        }
    })
}


let reconocedorDato = document.getElementById('lectorDato')

if (reconocedorDato) {
    reconocedorDato.addEventListener("click", function(){
        let datoActual= document.getElementById('dato').value;
        let tipoDato = typeof datoActual;
        let esNumero;

        if (isNaN(datoActual) || datoActual === "") {
            esNumero = "No es número";
        } else {
            esNumero= "Es un número"
        }
        
        let mensajeDato = `Tipo: ${tipoDato} - ${esNumero}`;
        document.getElementById("esNum").innerHTML = mensajeDato;
    })
}


let hazCuenta = document.getElementById('haceCuenta')

if (hazCuenta) {
    hazCuenta.addEventListener("click", function(){
        let resultadoCuenta = (25*4)-10;
        console.log(resultadoCuenta);
        document.getElementById("reCuenta").innerHTML = resultadoCuenta;
    })
}


let sumando = document.getElementById('sumar')

if (sumando) {
    sumando.addEventListener("click", function(){
        let n1 = Number(document.getElementById('num1').value);
        let n2 = Number(document.getElementById('num2').value);
        let resultadoSumando= n1 + n2;
        document.getElementById("resultadoSuma").innerHTML = resultadoSumando;
    })
}

let restando = document.getElementById('resta')

if (restando) {
    restando.addEventListener("click", function(){
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
}


let multiplicando = document.getElementById('multiplicar')

if (multiplicando) {
    multiplicando.addEventListener("click",function(){
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
}


let dividiendo = document.getElementById('dividir')

if (dividiendo) {
    dividiendo.addEventListener("click",function(){
        let n1 = Number(document.getElementById('num1').value);
        let n2 = Number(document.getElementById('num2').value);
        let resultadoDividiendo = n1 / n2;   
        if (resultadoDividiendo !== Infinity){
            document.getElementById('resultadoDivision').innerHTML = resultadoDividiendo.toFixed(2);
        } else {
            document.getElementById('resultadoDivision').innerHTML = "No se puede dividir por cero.";
        };
    })
}


let clasificando = document.getElementById('clasificar')

if (clasificando) {
    clasificando.addEventListener("click", function(){
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
}