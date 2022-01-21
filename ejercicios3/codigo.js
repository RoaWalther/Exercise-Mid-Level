"use strict"			
			
			//control de flujo y manejo de errores try...catch

let fruta = prompt("Ingresa una fruta");

fruta =fruta.toLowerCase();

try {fruta
	switch(fruta) {
		case "banana":
			alert(`La ${fruta} es una fruta de color amarilla`);
			break;
		case "manzana":
			alert(`La ${fruta} es una fruta de color roja`);
			break;
		default:
			alert(`La ${fruta} no esta en nuestra lista de frutas`);
			break;
	}
}catch(e) {
	console.log(e);
}

// ejercico pedir datos de talleres y ultimo examen

let taller1 = parseInt(prompt("Ingresa la nota del primer taller")) ;
let taller2 = parseInt(prompt("Ingresa la nota del segundo taller")) ;
const botonEnviar = document.getElementById("enviar-nota");
botonEnviar.addEventListener("click", ()=> {
	let resultado,mensaje;
	try{
		let preRes= parseInt(document.getElementById("nota-alumno").value);
		if (isNaN(preRes)) {
			throw "ingresaste mal los datos";
		}
			resultado = validarAprovacion(taller1,taller2,preRes);
			mensaje =enviarMensajes(preRes);
	}catch (e){
		resultado = "error en el sistema";
		mensaje= "<b style = 'color: red' >error</b>";
	}finally {
		abrirModal(resultado, mensaje);
	}
	
})

const enviarMensajes = (result)=> {
	let resultado;
	switch(result) {
		case 1: resultado = `No aprovaste el ultimo exmanen, tu nota es: <b> ${result} </b>`;
		break;
		case 2: resultado =`No aprovaste el ultimo exmanen, tu nota es: <b> ${result} </b>`;
		break;
		case 3: resultado = `No aprovaste el ultimo exmanen, tu nota es: <b> ${result} </b>`;
		break;
		case 4: resultado = `No aprovaste el ultimo exmanen, tu nota es: <b> ${result} </b>`;
		break;
		case 5: resultado = `No aprovaste el ultimo exmanen, tu nota es: <b> ${result} </b>`;
		break;
		case 6: resultado = `Aprovaste el ultimo examen, tu nota es: <b>${result}</b>`;
		break;
		case 7: resultado = `Aprovaste el ultimo examen, tu nota es: <b>${result}</b>`;
		break;
		case 8: resultado = `Aprovaste el ultimo examen, tu nota es: <b>${result}</b>`;
		break;
		case 9: resultado = `Aprovaste el ultimo examen, tu nota es: <b>${result}</b>`;
		break;
		case 10: resultado = `Aprovaste el ultimo examen, tu nota es: <b>${result}</b>`;
		break;
		default: resultado = null;
		break;
	}	
	return resultado;

}

const validarAprovacion = (nota1,nota2,preRes)=> {
	let promedio = (nota1+nota2+preRes) /3;
	if (promedio >= 6) {
		return `<span class= 'green'> APROVASTE con un ${promedio} en la materia </span>`;
	} else {
		return `<span class= 'red'> DESAPROVASTE con un ${promedio} en la materia </span>`;
	}
}

const abrirModal =(res,sms)=> {
	document.querySelector(".resultado").innerHTML = res;
	document.querySelector(".mensaje").innerHTML = sms;
	let modal = document.querySelector(".contenedor");
	modal.style.animation = "aparecer 10s forwards";
	modal.style.display = "flex";
}