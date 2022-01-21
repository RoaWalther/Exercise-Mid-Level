"use strict"

/*ejercicio 1 crear un formulario en el cual se 
pida el ingreso de datos para obtener las notas
con una peticion
*/
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const materia = document.getElementById("materia");
const resultado =document.querySelector(".resultado");

document.getElementById("boton-enviar").addEventListener("click",(e)=> {
	e.preventDefault();
	let error = validar();

	if (error[0]) {
		resultado.innerHTML =error[1];
		resultado.classList.add("red");
		
	}else {
		axios("notas.txt").then(res =>{
			let materia = document.getElementById("materia").value;
			if(materia == "Matematicas" || materia =="matematicas"){
				let Html = `Materia: ${materia},<br> Nota: ${res.data.Matematicas}`
				resultado.innerHTML = Html;
				resultado.classList.add("green");
				resultado.classList.remove("red");
			}else if (materia == "Fisica" || materia =="fisica") {
				let Html = `Materia: ${materia},<br> Nota: ${res.data.Fisica}`
				resultado.innerHTML = Html;
				resultado.classList.add("green");
				resultado.classList.remove("red");
			}else if (materia == "Algebra" || materia =="algebra") {
				let Html = `Materia: ${materia},<br> Nota: ${res.data.Algebra}`
				resultado.innerHTML = Html;
				resultado.classList.add("green");
				resultado.classList.remove("red");
			}else if (materia == "Programacion" || materia =="programacion") {
				let Html = `Materia: ${materia},<br> Nota: ${res.data.Programacion}`
				resultado.innerHTML = Html;
				resultado.classList.add("green");
				resultado.classList.remove("red");
			}else if (materia == "Logica" || materia =="logica") {
				let Html = `Materia: ${materia},<br> Nota: ${res.data.Logica}`
				resultado.innerHTML = Html;
			resultado.classList.add("green");
				resultado.classList.remove("red");
			}else if (materia == "Algoritmo" || materia =="algoritmo") {
				let Html = `Materia: ${materia},<br> Nota: ${res.data.Algoritmo}`
				resultado.innerHTML = Html;
				resultado.classList.add("green");
				resultado.classList.remove("red");
			}else{
				resultado.innerHTML = "no existe la materia"
				resultado.classList.add("red");
			}	
		});		
	}
 });

const validar = ()=> {
	let error = [];
	if (nombre.value.length < 5 || nombre.value.length > 40 ) {
		error[0]= true;
		error[1]= " El nombre es incorrecto";
		return error;
	}else if (email.value.length < 5 || 
	 		   email.value.length >40 || 
	 		  email.value.indexOf("@")== -1 || 
	 		  email.value.indexOf(".")== -1) {
		error[0]= true;
		error[1]= "El Email es invalido";
		return error;
	}else if(materia.value.length < 5 || materia.value.length > 40 ) {
		error[0]= true;
		error[1]= "Materia incorrecta";
		return error;
	 }
	error[0]= false;
	return error;
}

///problema  2


let alumnos = [
	
	{
		nombre1: "Walther Roa",
		email1: "w@gmail.com",
		materia1: "fisica"
	},{
		nombre1: "dallana Roa",
		email1: "d@gmail.com",
		materia1: "matematicas"
	},{
		nombre1: "jhon Roa",
		email1: "j@gmail.com",
		materia1: "calculo"
	},{
		nombre1: "yeison Roa",
		email1: "y@gmail.com",
		materia1: "algebra"
	},{
		nombre1: "anny Roa",
		email1: "a@gmail.com",
		materia1: "fisica"
	}
];

const boton1 = document.querySelector(".btn-confirmar");
const contenedor1 = document.querySelector(".contenedor");


for( let alumno in alumnos){
	let datos = alumnos[alumno];
	let nombre1 = datos["nombre1"];
	let email1 = datos["email1"];
	let materia1 = datos["materia1"];
	let htmlCode = `
		
		<div class="grid-item nombre"> ${nombre1}</div>
		<div class="grid-item email">${email1}</div>
		<div class="grid-item materia">${materia1}</div>
		<div class="grid-item corte">
			<select class="semestre">
				<option value="Corte 1">Corte 1</option>
				<option value="Corte 2">Corte 2</option>
				<option value="Corte 3">Corte 3</option>
			</select>
		</div>`;
	contenedor1.innerHTML += htmlCode;
}



boton1.addEventListener("click", (e)=> {
	let confi = confirm("Quieres caceptar la confirmación");
	if (confi) {
		document.body.removeChild(boton1);
		let elementos = document.querySelectorAll(".corte");
		let semestre = document.querySelectorAll(".semestre");
		for(let elemento in elementos){
			let semana = elementos[elemento];
			semana.innerHTML = semestre[elemento].value;
		}
	} else {}
})