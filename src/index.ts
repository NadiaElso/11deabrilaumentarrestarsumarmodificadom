let contador: number = 0;
let ingresarElementos = document.getElementById("elementosx");
let botonSumar = document.getElementById("sumando");
let botonrestar = document.getElementById("restar");
let botontotal = document.getElementById("total");

function sumarElementosx(): void {
  contador += 1;

  console.log(contador);
}
botonSumar?.addEventListener("click", sumarElementosx);

function restarElementosx(): void {
  contador -= 1;

  console.log(contador);
}
botonrestar?.addEventListener("click", restarElementosx);

function totalValoresIngresados(): void {
  contador += parseInt(ingresarElementos.value);
  let parrafototal = (document.getElementById("ptotal")?.innerHTML = contador);
}
botontotal?.addEventListener("click", totalValoresIngresados);
