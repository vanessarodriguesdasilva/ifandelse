//Enunciado: Escreva uma função chamada verificarParidade que receba um número inteiro como argumento e retorne uma string indicando se o número é "Par" ou "Ímpar".
var verificaParidade = Number(prompt("Digite um número: "))

if(verificaParidade % 2 === 0){
    alert("Seu número é par.")
}
else{
    alert("Seu número é impar.")
}