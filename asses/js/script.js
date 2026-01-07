// Precio del producto
const precio = 400000;

// Mostrar el precio inicial
const precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

// Elementos del DOM
const total = document.querySelector(".valor-total");
const cantidad = document.querySelector(".cantidad");
const mas = document.querySelector(".mas");
const menos = document.querySelector(".menos");

// Función para actualizar el total
function actualizarTotal() {
    let cantidadActual = Number(cantidad.innerHTML);
    let totalPrecio = precio * cantidadActual;
    total.innerHTML = totalPrecio;
}

// Evento click en "+"
mas.addEventListener("click", () => {
    let contador = Number(cantidad.innerHTML);
    contador += 1;
    cantidad.innerHTML = contador;
    actualizarTotal();
});

// Evento click en "-"
menos.addEventListener("click", () => {
    let contador = Number(cantidad.innerHTML);
    if (contador > 0) {
        contador -= 1;
        cantidad.innerHTML = contador;
        actualizarTotal();
    }
});
