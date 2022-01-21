// obtener lista de usuarios con el metodo callback

class PersonasCallB {
	constructor(nombre,instragram){
	this.nombre = nombre;
	this.instragram = instragram;
	}
};

const datos = [
	["Walther", "Instagram@Walther"],
	["Daniel", "Instagram@Daniel"],
	["Maria", "Instagram@Maria"],
	["Laura", "Instagram@Laura"],

];


const personas = [];

for (let i = 0; i < datos.length; i++) {
	personas[i]= new PersonasCallB(datos[i][0],datos[i][1]);
}

const getPersona =(id,cb)=> {
	if (personas[id]== undefined) {
		cb("no se registra usuario");
	} else {
		cb(null,personas[id],id);
	}
};

const getInstagram = (id,cb)=> {
	if (personas[id].instragram == undefined) {
		cb("no se registra instagram");
	} else {
		cb(null,personas[id].instragram);
	}
};

let id= parseInt(prompt("introduzca el identificador de la persona"));

getPersona(id,(err,persona,id)=> {
	if (err) {
		console.log(err);
	}else {
		console.log(persona.nombre);
		getInstagram(id,(err,instragram)=> {
			if (err) {
			console.log(err);
			}else {
			console.log(instragram);
			}
		})
	}
});


//implementar registro de usuarios con Promesa

class Personas {
	constructor(nombre,email){
	this.nombre = nombre;
	this.email = email;
	}
};

const dato = [
	["camilo", "camilo@gmail.com"],
	["Marcos", "Marcos@gmail.com"],
	["Juan", "camilo2@gmail.com"],
	["Paula"]
];


const persona = [];

for (let i = 0; i < dato.length; i++) {
	persona[i]= new Personas(dato[i][0],dato[i][1]);
}

const obtenerPersona =(id)=> {
	return new Promise((res,rej)=> {
		if (persona[id]==undefined) {
			rej("No se encuentra el Ususario registrado");
		}else {
			res(persona[id])
		}
	});
};

const obtenerInstagram = (id)=> {
	return new Promise((res,rej)=> {
		if (persona[id].email==undefined) {
			rej("No tiene un Email registrado");
		}else {
			res(persona[id].email)
		}
	});
};

let user= parseInt(prompt("introduzca el ID de la persona que estas buscando"));
obtenerPersona(user).then((persona)=> {
	console.log(persona.nombre);
	return obtenerInstagram(user);
}).then((email)=> {
	console.log(email);
	}).catch((e)=> {
		console.log(e);
	})

			//FUNCIONES ASINCRONAS


const obtenerInformacion = (text)=> {
	return new Promise((res,rej)=> {
		setTimeout(()=> {
			res(text);
		},Math.random()*200);
	});
}

fetch("datos.txt").then(res=>res.json()).then( async res=> {
	console.log(await obtenerInformacion(res.name));
	console.log(await obtenerInformacion(res.materia));
	data1 = await obtenerInformacion(res.nota);
	console.log(data1);
})
	


//ejercicio 2

const materiaHTML = document.querySelector(".materias");
const materias = [
	{ 	nombre: "Fisica",
		nota: 7
	},
	{ 	nombre: "Logica",
		nota: 5
	},
	{ 	nombre: "Algebra",
		nota: 9
	},
	{ 	nombre: "Matematicas",
		nota: 8
	},
	{ 	nombre: "Programacion",
		nota: 6
	},
];

const getMateria = (id)=> {
	return new Promise((res, rej)=> {
		let materia = materias[id];
		if (materia == undefined) {
			rej("la materia no existe");
		} else {
			setTimeout(()=>{
				res(materia)
			}, Math.random()*1000);
		}
	})
}

const setNota = async ()=> {
let aceptar = confirm( "quieres ver las notas");
	if (aceptar) {
		let materia=[];
	for (let i = 0; i < materias.length; i++) {
		materia[i]= await getMateria(i);
		let codeHTML = `
		<div class="materia">
			<div class="nombre">${materia[i].nombre}</div>
			<div class="nota"><b>${materia[i].nota}</b></div>
		</div>`;
		materiaHTML.innerHTML += codeHTML;
	}
	}
	
}

setNota();


