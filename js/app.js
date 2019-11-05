$("#calcular").click(function(){
calcular();
});

function calcular(){
var opcion = $("#monedas option:selected").html();
var dinero = $("#monedas option:selected").val();
var monto =  $("#ingrese").val();
var resultado;
if (opcion == "Dolar") {
resultado = parseInt(monto) * parseInt(dinero);
$("#Rcotizacion").html(dinero + " Gs.");
$("#Rmonto").html(monto + " Dolares.");
$("#Rcambio").html(resultado + " Gs.");
function ingresoDin() {
var ingresos = $("#ingrese").html();
var resultadoFin = ingresos * dinero;
console.log(resultadoFin);
}
}
if (opcion == "Real") {
resultado = parseInt(monto) * parseInt(dinero);
$("#Rcotizacion").html(dinero + " Gs.");
$("#Rmonto").html(monto + " Reales.");
$("#Rcambio").html(resultado + " Gs.");
}
if (opcion == "Peso") {
resultado = parseInt(monto) * parseInt(dinero);
$("#Rcotizacion").html(dinero + " Gs.");
$("#Rmonto").html(monto + " Pesos.");
$("#Rcambio").html(resultado + " Gs.");
}
}