const lienzo = document.getElementById('lienzo')
const ctx = lienzo.getContext("2d")
const ctxx = lienzo.getContext("2d")



console.log(ctx);

//Bases
const bases = () => {
ctx.beginPath()
ctx.fillStyle = "white"
ctx.fillRect(310,360,60,8) 

ctx.beginPath()
ctx.fillStyle = "white"
ctx.fillRect(390,360,60,8) 

ctx.beginPath()
ctx.fillStyle = "white"
ctx.fillRect(470,360,60,8) 

ctx.beginPath()
ctx.fillStyle = "white"
ctx.fillRect(550,360,60,8) 

ctx.beginPath()
ctx.fillStyle = "white"
ctx.fillRect(630,360,60,8) 

ctx.beginPath()
ctx.fillStyle = "white"
ctx.fillRect(230,360,60,8) 

ctx.beginPath()
ctx.fillStyle = "white"
ctx.fillRect(150,360,60,8) 

ctx.beginPath()
ctx.fillStyle = "white"
ctx.fillRect(710,360,60,8) 
}  

//Cabeza
const cabeza = () => {
ctx.beginPath()
ctx.arc(400,135,20, 0, 2*Math.PI)
ctx.fillStyle = "white"
ctx.fill()
}

//Torso
const torso = () => {
ctx.beginPath()     
ctx.fillRect(390,150,9,50) 
    }

//Pie Derecho
const pieDer = () => {
ctx.beginPath()
ctx.lineWidth=5;
ctx.moveTo(397,199);
ctx.lineTo(383,250);  
ctx.strokeStyle = "white";
ctx.stroke();
    }

//Mano Derecha
const manoDer = () => {
ctx.beginPath()
ctx.lineWidth=5;
ctx.moveTo(390,150);
ctx.lineTo(370,180);  
ctx.strokeStyle = "white";
ctx.stroke();
}

//Pie Izquierdo
const pieIzq = () => {
ctx.beginPath()  
ctx.lineWidth=5;
ctx.moveTo(392,199);
ctx.lineTo(375,250);  
ctx.strokeStyle = "white";
ctx.stroke(); 


    }

//Mano Izquierda
const manoIzq = () => {
ctx.beginPath()   
ctx.lineWidth=5;
ctx.moveTo(390,150);
ctx.lineTo(380,190);  
ctx.strokeStyle = "white";
ctx.stroke();
    }


//LETRAS
const c = () => {
    ctxx.beginPath();
    ctxx.fillStyle = "white"
    ctxx.font="bold 60px verdana";
    ctxx.textAlign="start";
    ctxx.fillText("C", 158, 350);
    ctxx.stroke();
}
const h = () => {
    ctxx.fillStyle = "white"
    ctxx.font="bold 60px verdana";
    ctxx.textAlign="start";
    ctxx.fillText("H", 235, 350);
    ctxx.stroke();
}

const a= () => {
    ctxx.fillStyle = "white"
    ctxx.font="bold 60px verdana";
    ctxx.textAlign="start";
    ctxx.fillText("A", 317, 350);
    ctxx.stroke();
    ctxx.fillText("A", 475, 350);
    ctxx.stroke();
}
const v = () => {
    ctxx.fillStyle = "white"
    ctxx.font="bold 60px verdana";
    ctxx.textAlign="start";
    ctxx.fillText("V", 397, 350);
    ctxx.stroke();
}
const l = () => {
    ctxx.fillStyle = "white"
    ctxx.font="bold 60px verdana";
    ctxx.textAlign="start";
    ctxx.fillText("L", 560, 350);
    ctxx.stroke();
}
const e = () => {
    ctxx.fillStyle = "white"
    ctxx.font="bold 60px verdana";
    ctxx.textAlign="start";
    ctxx.fillText("E", 640, 350);
    ctxx.stroke();
}
const s = () => {
    ctxx.fillStyle = "white"
    ctxx.font="bold 60px verdana";
    ctxx.textAlign="start";
    ctxx.fillText("S", 718, 350);
    ctxx.stroke();
}


bases()

var cont = 1;
var ganar = 1;
var getLetter = function(){
var letra = document.getElementById("letra").value;
let lt = letra.toLowerCase()
console.log(lt+" ");
console.log(cont)
if(ganar===7){
    window.alert('Has Ganado !!!');
    window.location.reload();
}
if(lt==='c' || lt==='h' || lt==='a' || lt==='v' || lt==='l' || lt==='e' || lt==='s'){
    if(lt==='c'){
        c();
        ganar++;
    }
    if(lt==='h'){
        h();
        ganar++;
    }
    if(lt==='a'){
        a();
        ganar++;
    }
    if(lt==='v'){
        v();
        ganar++;
    }
    if(lt==='l'){
        l();
        ganar++;
    }
    if(lt==='e'){
        e();
        ganar++;
    }
    if(lt==='s'){
        s();
        ganar++;
    }
}else{
    if(cont===7){
        window.alert('Has perdido... Vuelve a intentarlo');
        window.location.reload();
    }
    if(cont===6){
        manoIzq();
        cont++;
    }
    if(cont===5){
        pieIzq();
        cont++;
    }
    if(cont===4){
        manoDer();
        cont++;
    }
    if(cont===3){
        pieDer();
        cont++;
    }
    if(cont===2){
        torso();
        cont++;
    }
    if(cont===1){
        cabeza();
        cont++;
    }
    
}

}

