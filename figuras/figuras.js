const lienzo = document.getElementById('lienzo')
const ctx = lienzo.getContext("2d")

console.log(ctx);
//Cuadrado
const cuadrado = () => {
ctx.beginPath()     
ctx.fillStyle = "#ff5555" //define estilos 
ctx.fillRect(25,50,150,150) //dibuja cuadrado
}

//Circulo
const circulo = () => {
ctx.beginPath()
ctx.arc(100,300,75, 0, 2*Math.PI)
ctx.fillStyle = "#00e7ed"
ctx.fill()
//Contorno
ctx.lineWidth = 2 
ctx.strokeStyle = "#25dcdc"
ctx.stroke()
}

//Triangulo
const triangulo = () => {
ctx.beginPath()
ctx.fillStyle = "#ffdf4a";
ctx.moveTo(325, 50);
ctx.lineTo(230, 210);
ctx.lineTo(420, 210);
ctx.fill();
}

//hexagono
const hexagono = () => {
    ctx.beginPath()
    ctx.fillStyle = "#fe0e0f";
    ctx.moveTo(210, 350);
    ctx.lineTo(260, 270);
    ctx.lineTo(350, 270);
    ctx.lineTo(400, 350);
    ctx.lineTo(350, 430);
    ctx.lineTo(260, 430);
    ctx.fill();
    }

//Pentagono
const pentagono = () => {
    ctx.beginPath()
    ctx.fillStyle = "#9f51ff";
    ctx.moveTo(550, 70);
    ctx.lineTo(460, 140);
    ctx.lineTo(490, 250);
    ctx.lineTo(610, 250);
    ctx.lineTo(640, 140);
    ctx.fill();
    }

//Rectangulo
const rectangulo = () => {
    ctx.beginPath()
    ctx.fillStyle = "#00ce52";
    ctx.fillRect(430,300,240,100) //dibuja cuadrado
    ctx.fill();
    }

cuadrado()
circulo()
triangulo()
hexagono()
pentagono()
rectangulo()