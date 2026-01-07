precio = 400000


precioSpan = document.querySelector(".precio-inicial")
precioSpan.innerHTML = precio
const total = document.querySelector(".valor-total");




const cantidad = document.querySelector(".cantidad");
const mas = document.querySelector(".mas");
const menos = document.querySelector(".menos");



function actualizarTotal() {
   let cantidadActual = Number(cantidad.innerHTML);
   let totalPrecio = precio * cantidadActual;
   total.innerHTML = totalPrecio;
}


mas.addEventListener("click", () => {
   let contador = Number(cantidad.innerHTML);
   contador += 1;
   cantidad.innerHTML = contador;
   actualizarTotal();
});


menos.addEventListener("click", () => {
   let contador = Number(cantidad.innerHTML);
   if (contador > 0) {
       contador -= 1;
       cantidad.innerHTML = contador;
       actualizarTotal(); 
   }
});