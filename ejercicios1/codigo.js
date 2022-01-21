"use strict"

let nextPage = "animaciones.html";

let boton = document.createElement("button")
boton.classList.add("boton");
document.querySelector(".content").appendChild(boton);

boton.addEventListener("click",()=>{
	window.open(nextPage);
});

let screenLeft = window.screenLeft;
document.write(screenLeft + "<br>");

let screenTop = window.screenTop;
document.write(screenTop + "<br>");


let scrollX = window.scrollX; 
let scrollY = window.scrollY;

console.log(scrollX);
console.log(scrollY);


//ejercicio: comprobar alto y ancho de la pantalla para ver sus componentes y caracteristicas

let alto = window.screen.availHeight; 
let ancho = window.screen.availWidth;

let comprar = confirm(`El alto es: ${alto} y el ancho es: ${ancho}, ¿Quieres realizar la compra?.`);

if (comprar) {
	alert("realizaste la compra");
}else{
	alert("Compra cancelada");
}

//ejercicio2: comprobar donde se encuentra alojado el achivo y mostrarlo en pantalla

const href = window.location.href;
const pathname = window.location.pathname;
const hostname = window.location.hostname;
const protocol = window.location.protocol;


let html =  `Protocolo: <b style = "color: red "> ${protocol}</b>,<br> 
			Hostname: <b style = "color: red "> ${pathname}</b>, <br>
			pathname: <b style = "color: red "> ${hostname}</b>,<br>
			Url: <b style = "color: red "> ${href}</b><br>`
document.write(html);


















