precio = 400000
precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio
const cantidad = document.querySelector(".cantidad");
const botonSuma = document.querySelector("#suma");
const botonResta = document.querySelector("#resta");
const precioTotal = document.querySelector(".valor-total");

botonSuma.addEventListener("click", () => {
cantidad.innerHTML++;
precioTotal.innerHTML = cantidad.innerHTML * precioSpan.innerHTML;
})

botonResta.addEventListener("click", () => {
    cantidad.innerHTML--;
    precioTotal.innerHTML = cantidad.innerHTML * precioSpan.innerHTML
})



