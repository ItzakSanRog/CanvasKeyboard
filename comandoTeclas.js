var canvasObj = document.getElementById("lienzo");
var dibujo = canvasObj.getContext("2d");
var limpiarLienzo = document.getElementById("limpiarLienzo");
var movimientoInput = document.getElementById("movimientoInput");
var radioNegro = document.getElementById("radioNegro");
var radioNaranja = document.getElementById("radioNaranja");
var radioRosa = document.getElementById("radioRosa");


document.addEventListener("keydown", keyDraw);
limpiarLienzo.addEventListener("click",limpiar);
//
//Objeto de teclas
var teclas = {
    IZQUIERDA:37,
    ARRIBA:38,
    DERECHA:39,
    ABAJO:40
};
//

var color ="black";
var xActual= canvasObj.width/2;
var yActual= canvasObj.height/2;



function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final) {
    dibujo.beginPath();
    dibujo.strokeStyle = color;
    dibujo.moveTo(x_inicial, y_inicial);
    dibujo.lineTo(x_final, y_final);
    dibujo.stroke();
    dibujo.closePath();
}

function keyDraw(key){
    var movimiento = parseInt(movimientoInput.value);
    if(movimiento <= 0 || isNaN(movimiento)){
        movimiento = 5;
    }
    
    if(radioNegro.checked){
        color="black";
    }
    if(radioNaranja.checked){
        color="#ef941c";
    }
    if(radioRosa.checked){
        color="#fc2ddd";
    }
    switch(key.keyCode){
        case teclas.IZQUIERDA:
          dibujarLinea(color,xActual,yActual,(xActual-movimiento),yActual);
          xActual=xActual-movimiento;
        break;
        case teclas.ARRIBA:
        dibujarLinea(color,xActual,yActual,xActual,(yActual-movimiento));
        yActual=yActual-movimiento;
        break;
        case teclas.DERECHA:
        dibujarLinea(color,xActual,yActual,(xActual+movimiento),yActual);
        xActual=xActual+movimiento;
        break;
        case teclas.ABAJO:
        dibujarLinea(color,xActual,yActual,xActual,(yActual+movimiento));
        yActual=yActual+movimiento;
        break;
        default:
        break;
    }
}

function limpiar(){
    dibujo.clearRect(0, 0, canvasObj.width, canvasObj.height);
    xActual= canvasObj.width/2;
    yActual= canvasObj.height/2;
}