//Faça um programa que leia dois números e apresente na tela o maior deles. A mensagem deve ser: “Maior número entrado: <número>”, onde em <número> deve aparecer o maior número entrado.

let primeiroNumero = Number(prompt("Digite o primeiro número: "))
let segundoNumero = Number(prompt("Digite o segundo número: "))

if(primeiroNumero>segundoNumero){
    alert(primeiroNumero + " É maior que " + segundoNumero)
}  

else{
    alert(segundoNumero + " É maior que " + primeiroNumero)
}
