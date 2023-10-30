/*const productos = [
	{nombre: "vainilla", precio: 85 },
	{nombre: "relajantes", precio: 120 },
	{nombre: "lavanda", precio: 65 },
	{nombre: "inicial", precio: 290 },
	{nombre: "esenciales", precio: 350 },
];
let carrito = []

let seleccion = prompt("Hola, desea comprar algun producto si o no")

while(seleccion != "si" && seleccion != "no"){
	alert("por favor ingresa si o no")
	seleccion = prompt("Hola, desea comprar algun producto si o no")
}

if (seleccion == "si"){
	alert("a continuación nuestra lista de productos")
	let todosLosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$");
	alert(todosLosProductos.join(" - "))
} else if (seleccion == "no"){
	alert ("gracias por visitar SPAnda, hasta pronto")
}

while(seleccion != "no"){
	let producto = prompt("agrega un producto a tu carrito")
	let precio = 0

	if(producto == "vainilla" || producto == "relajantes" || producto == "lavanda" || producto == "inicial" || producto == "esenciales" ){
		switch(producto) {
			case "vainilla":
				precio = 85;
				break;
			case "relajantes":
				precio = 120;
				break;
			case "lavanda":
				precio = 65;
				break;
			case "inicial":
				precio = 290;
				break;
			case "esenciales":
				precio = 350;
				break;
			default:
				break;
		}
	let unidades = parseInt(prompt("¿cuantas unidades quieres llevar?"))
	carrito.push({producto, unidades, precio})
	console.log(carrito);
	} else {
		alert("no tenemos ese producto")
	}

	seleccion = prompt("¿desea seguir comprando?")
	while(seleccion == "no"){
		alert("gracias por su compra, vuelva pronto")
		carrito.forEach((carritoFinal) => {
			console.log(`producto: ${carritoFinal.producto}. unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
		})
		break;
	}
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`El total a pagar por su compra es: ${total}`);*/


const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");

const productos = [
	{
		id: 1,
		nombre: "Vainilla",
		precio: 85,
		img: "../multimedia/img/vainilla.jpg",
		cantidad: 1,
	},
	{
		id: 2,
		nombre: "Relajantes",
		precio: 120,
		img: "../multimedia/img/antiestres.jpg",
		cantidad: 1,
	},
	{
		id: 3,
		nombre: "Lavanda",
		precio: 65,
		img: "../multimedia/img/esencias.jpg",
		cantidad: 1,
	},
	{
		id: 4,
		nombre: "Inicial",
		precio: 290,
		img: "../multimedia/img/antiestres.jpg",
		cantidad: 1,
	},
	{
		id: 5,
		nombre: "Esenciales",
		precio: 350,
		img: "../multimedia/img/kits iniciales.jpg",
		cantidad: 1,
	},
	{
		id: 6,
		nombre: "mechas",
		precio: 85,
		img: "../multimedia/img/vainilla.jpg",
		cantidad: 1,
	},
];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((product)=> {
	let content = document.createElement("div");
	content.className = "card";
	content.innerHTML = `
	<img src="${product.img}">
	<h3>${product.nombre}</h3>
	<p class="price">${product.precio} $</p>
	`;

	shopContent.append(content);

	let comprar = document.createElement("button")
	comprar.innerText = "comprar";
	comprar.className = "comprar";

	content.append(comprar);

	comprar.addEventListener("click", () => {
	const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
	
		if(repeat){
			carrito.map((prod) => {
				if(prod.id === product.id){
					prod.cantidad++;
				}
			});
		} else {
		carrito.push({
			id : product.id,
			img : product.img,
			nombre : product.nombre,
			precio : product.precio,
			cantidad : product.cantidad,
		});
		console.log(carrito);
		console.log(carrito.length);
		carritoCounter();
		saveLocal();
		}
	});
});
	const saveLocal = () => {
		localStorage.setItem("carrito", JSON.stringify(carrito));
	};

	JSON.parse(localStorage.getItem("carrito"));
	

	const pintarCarrito = () => {
	modalContainer.innerHTML = "";
	modalContainer.style.display = "flex";	
	const modalHeader = document.createElement("div");
	modalHeader.className = "modal-header"
	modalHeader.innerHTML = `
		<h1 class="modal-header-title">Carrito.</h1>
	`;
	modalContainer.append(modalHeader);

	const modalbutton = document.createElement("h1");
	modalbutton.innerText = "x";
	modalbutton.className = "modal-header-button";

	modalbutton.addEventListener("click", () => {
		modalContainer.style.display = "none";
	});

	modalHeader.append(modalbutton);


	carrito.forEach((product) => {
		let carritoContent = document.createElement("div")
		carritoContent.className = "modal-content"
		carritoContent.innerHTML = `
			<img src="${product.img}">
			<h3>${product.nombre}</h3>
			<p>${product.precio} $</p>
			<span class="restar"> - </span>
			<p>Cantidad: ${product.cantidad}</p>
			<span class="sumar"> + </span>
			<p>Total: ${product.cantidad * product.precio}</p>
		`;
		modalContainer.append(carritoContent);

		console.log(carrito.length);

		let restar = carritoContent.querySelector(".restar")

		restar.addEventListener("click", () => {
			if(product.cantidad !== 0) {
				console.log("restar");
				product.cantidad --;
			}
			saveLocal();
			pintarCarrito();
			
		});

		let sumar = carritoContent.querySelector(".sumar")

		sumar.addEventListener("click", () => {
			if(product.cantidad !== 0) {
				console.log("sumar");
				product.cantidad ++;
			}
			saveLocal();
			pintarCarrito();
		});

		let eliminar = document.createElement("span");

		eliminar.innerText = "❌";
		eliminar.className = "delete-product";
		carritoContent.append(eliminar);

		eliminar.addEventListener("click", eliminarProducto);
	});

	const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

	const totalBuying = document.createElement("div")
	totalBuying.className = "total-content"
	totalBuying.innerHTML = `total a pagar: ${total} $`;
	modalContainer.append(totalBuying);
};

verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = () => {
	const foundId = carrito.find((element) => element.id);

	carrito = carrito.filter((carritoId) => {
		return carritoId !== foundId;
	});
	carritoCounter();
	saveLocal();
	pintarCarrito();
};

const carritoCounter = () => {
	cantidadCarrito.style.display = "block";

	const carritoLength = carrito.length;

	localStorage.setItem("carritoLength", JSON.stringify(carritoLength))

	cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"))
};

carritoCounter();