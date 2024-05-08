var listaActual = JSON.parse(localStorage.getItem("miLista")) || [];
var nuevoElemento = "Nuevo elemento";

function anyadirCarrito(x) {

	switch (x) {
		case 1:
			var producto = ["Mechero Zenith Flame", "10"];
			listaActual.push(producto);
			localStorage.setItem("miLista", JSON.stringify(listaActual));
			break;
		case 2:
			var producto = ["Mechero Sparkle Blaze", "16"];
			listaActual.push(producto);
			localStorage.setItem("miLista", JSON.stringify(listaActual));
			break;
		case 3:
			var producto = ["Mechero Vintage Glow", "11"];
			listaActual.push(producto);
			localStorage.setItem("miLista", JSON.stringify(listaActual));
			break;
		case 4:
			var producto = ["Mechero Eco-Fire", "18"];
			listaActual.push(producto);
			localStorage.setItem("miLista", JSON.stringify(listaActual));
			break;
		case 5:
			var producto = ["Mechero Adventure Torch", "14"];
			listaActual.push(producto);
			localStorage.setItem("miLista", JSON.stringify(listaActual));
			break;
		case 6:
			var producto = ["Mechero Glamour Flare", "15"];
			listaActual.push(producto);
			localStorage.setItem("miLista", JSON.stringify(listaActual));
			break;
		case 7:
			var producto = ["MMechero Bohemian Blaze", "9"];
			listaActual.push(producto);
			localStorage.setItem("miLista", JSON.stringify(listaActual));
			break;
		case 8:
			var producto = ["Mechero Tech Spark", "112"];
			listaActual.push(producto);
			localStorage.setItem("miLista", JSON.stringify(listaActual));
			break;
		case 9:
			var producto = ["Mechero Clásico Elegance", "13"];
			listaActual.push(producto);
			localStorage.setItem("miLista", JSON.stringify(listaActual));
			break;

	}

}

function carrito() {
	var codigo = "";
	for (var i = 0; i < listaActual.length; i++) {
		var articulo = listaActual[i];
		var mostrar = `<div class="row border-top border-bottom">
					<div class="row main align-items-center">
						<div class="col-4">
							<svg class="bd-placeholder-img card-img-top" width="100%" height="225"
								xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"
								preserveAspectRatio="xMidYMid slice" focusable="false">
								<image href="../imgs/${articulo[0]}.jpg" width="100%"></image>
							</svg>
						</div>
						<div class="col">
							<div class="row">${articulo[0]}</div>
						</div>
							<div class="col">&euro; ${articulo[1]} 
							<button type="button" class="btn btn-sm btn-outline-secondary" onclick="eliminarCarro(${i})">Eliminar</button>
						</div>
					</div>
				</div>`
		codigo = codigo + " " + mostrar
	}
	
	document.getElementById("carrito").innerHTML = codigo;
	
	var coste =0;
	for (var i = 0; i < listaActual.length; i++) {
		var articulo = listaActual[i];
		coste = coste + parseInt(articulo[1]);
	}
	
	
	document.getElementById("coste").innerHTML = coste.toString().concat("€");
	
	document.getElementById("item").innerHTML = "Elementos ".concat(listaActual.length);
	
	document.getElementById("Item").innerHTML = "Elementos ".concat(listaActual.length);
}

function eliminarCarro(i) {
	
	var listaActual = JSON.parse(localStorage.getItem("miLista")) || [];
	
		listaActual.splice(i, 1);
	
	localStorage.setItem("miLista", JSON.stringify(listaActual));
	location.reload();
}

function elementos(){
	
}
/*
//esta funcion es la encargada de pedir los parametros crear un pedido(array) con cada uno de estos, que posteriormente sera añadida a la lista de todos los pedidos
function solicitarFecha() {

	var pedido = [];

	let id = lista.length;

	let nombre = prompt("Nombre:");

	let importe = prompt("Importe");

	let inputFecha = prompt("Introduce la fecha de entrada en formato yyyy/MM/dd:");

	let dias = 5;

	let nuevaFecha = new Date(inputFecha);


	for (let i = 0; i < dias; i++) {

		nuevaFecha.setDate(nuevaFecha.getDate() + 1);


		if (nuevaFecha.getDay() === 0) {
			nuevaFecha.setDate(nuevaFecha.getDate() + 1);
		}
	}

	var fechaTexto = nuevaFecha.getDate() + "/" + (nuevaFecha.getMonth() + 1) + "/" + nuevaFecha.getFullYear();

	pedido = [id, nombre, importe, inputFecha, fechaTexto];

	lista.push(pedido);

	console.log(lista);

}

//con esta funcion actualizaremos las tablas que nos muestran todos los envios y el de mayor prioridad
function recargar() {

	var tabla = "id, nombre, importe, fechaEntrada, fechaFin <br>";

	for (var x = 0; x < lista.length; x++) {

		tabla = tabla + lista[x].toString() + "<br>";

	}

	document.getElementById("mostrarEnvios").innerHTML = tabla.toString();

	var pedidosOrden = lista.sort((a, b) => {

		if (a[4] > b[4]) {

			return 1;

		}

		else

			return -1;


	})

	if (pedidosOrden[0] == null) {
		document.getElementById("proximoEnvio").innerHTML = " ";

	} else {
		document.getElementById("proximoEnvio").innerHTML = pedidosOrden[0].toString();
	}


}

//con esta funcion eliminaremos un pedido de la lista principal segun la id introducida 
function eliminar() {

	let idBuscar = prompt("indica el id del pedido que desea eliminar: ");


	for (var x = 0; x < lista.length; x++) {

		if (lista[x].id  = idBuscar) {
			lista.splice(x, 1);
		}

	}
}
*/
