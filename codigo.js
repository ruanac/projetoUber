function formatamoeda(numero) {
  return numero.toFixed(2).replace(".", ",");
}

function Calcular() {
  distanciakm = inputDistancia.value;
  tempomin = inputTempo.value;
  valorcorrida = 2 + distanciakm * 1.4 + tempomin * 0.26;
  botaoCalcular.innerHTML = "Total: R$" + formatamoeda(valorcorrida);
}
