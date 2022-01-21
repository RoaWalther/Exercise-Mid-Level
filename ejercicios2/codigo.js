//Eventos de padres a hijos

const boton = document.querySelector(".button").addEventListener("click", (e)=> {
	alert("se ejecuta el boton");
	e.stopPropagation(); 
}); 

const contenedor = document.querySelector(".contenedor");
contenedor.addEventListener("click", (e)=> {
	alert("se ejecuta el contenedor");
});

		//EVENTOS DE MOUSE

//event mouseover cuando se mueve dentro del contenedor o sus hijos

contenedor.addEventListener("mouseover", (e)=> {
 	console.log("se ejecuta el contenedor con el evento mouseover");
});

//event mouseout se mueve fuera del contenedor

contenedor.addEventListener("mouseout", (e)=> {
 	console.log("se ejecuta el contenedor con el evento mouseout");
});

//event contextmenu cuando se da click y se desclickea

contenedor.addEventListener("contextmenu", (e)=> {
 	console.log("se ejecuta el contenedor con el evento contextmenu");
});

//event mouseleave cuando se mueve sobre el content de adentro hacia afuera

contenedor.addEventListener("mouseleave", (e)=> {
 	console.log("se ejecuta el contenedor con el evento mouseleave");
});


//event mousedown cuando se da click pero mas rapido que el event click

contenedor.addEventListener("mousedown", (e)=> {
 	console.log("se ejecuta el contenedor con el evento mousedown");
});

// 		//EVENTOS DE TECLADO

const input = document.querySelector(".input-prueba");

//event keydown cuando se presiona una tecla
input.addEventListener("keydown", (e)=> {
	console.log("una tecla fue presionada");
});

//event keypress cuando se presiona una tecla y se suelta en el mismo elemento
input.addEventListener("keypress", (e)=> {
	console.log("una tecla fue presionada y soltada por el ususario");
});

//event keyup cuando se suelta en el mismo elemnto
input.addEventListener("keyup", (e)=> {
	console.log("una tecla fue soltada dentro del contenedor");
});

//event select cuando sellecionamos un parrafo
input.addEventListener("select", (e)=> {
	let div = document.createElement("label");
	let star = e.target.selectionStart;
	let end = e.target.selectionEnd;
	let texto = input.value;
	div.innerHTML=texto.substring(star,end);
	document.querySelector(".contenedor1").appendChild(div);
})


// 			//EVENTOS DE LA INTERFAS

img = document.querySelector(".img-event");

//event error
img.addEventListener("error", ()=> {
	console.log("Ocurrio un error");
})


//event load

addEventListener("load", ()=> {
	console.log("Ha cargado el sitio");
})

//event resize

addEventListener("resize", ()=> {
	console.log("Ha cambiado la resolución de la pantalla");
})

//event scroll

addEventListener("scroll", ()=> {
	console.log("Se ha desplazado con el scroll");
})




			//TEMPORIZADORES

const temporizador = setTimeout(()=> {
	console.log("hola soy un temporizador de 2 segundos");
}, 2000);

const intervalos = setInterval(()=> {
	console.log("hola soy un intervalo de 2 segundos <br>");
}, 2000);

setTimeout(()=> {
	clearTimeout(temporizador); 
	clearInterval(intervalos); 
},8000);



