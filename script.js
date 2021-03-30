function calcula_imc(){
var altura = document.imcForm.altura.value;
var peso = document.imcForm.peso.value;

var quadrado = (altura * altura);
var quadradoFloat = parseFloat(quadrado);
var calculo = (peso/quadrado);
var capturando = document.getElementById("resultado")

if(calculo<18.5){
capturando.innerHTML = "Você está magro com esse indice: " + calculo.toFixed(2);
}
  
else if(calculo>=18.5 && calculo<24.9){
capturando.innerHTML = "Você está normal com esse indice: " + calculo.toFixed(2);
}

else if(calculo>=25 && calculo<29.9) {
capturando.innerHTML = "Você está com sobre peso com esse indice: " + calculo.toFixed(2);
}
else if(calculo>=30 && calculo<39.9) {
capturando.innerHTML = "Você está com obesidade com esse indice: " + calculo.toFixed(2);
}
else if (calculo>40) {
capturando.innerHTML = "Você está com obesidade grave com esse indice: " + calculo.toFixed(2);
}
}