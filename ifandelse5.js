//Enunciado: Dado um array de números inteiros, escreva uma função chamada encontrarMaiorNumero que encontre e retorne o maior número presente no array.
let numeros = [3, 6, 8, 45, 2]

if(numeros[0] > numeros[1] && numeros[0] > numeros[2] && numeros[0] > numeros[3] && numeros[0] > numeros[4]){
    alert('O maior número é: ' + numeros[0]); 
}
else if(numeros[ 1] > numeros[0] && numeros[1] > numeros[2] && numeros[1] > numeros[3] && numeros[1] > numeros[4]){
    alert('O maior número é: ' + numeros[1]); 
}
else if(numeros[2] > numeros[0] && numeros[2] > numeros[1] && numeros[2] > numeros[3] && numeros[2] > numeros[4]){
    alert('O maior número é: ' + numeros[2]);
}
else if(numeros[3] > numeros[0] && numeros[3] > numeros[1] && numeros[3] > numeros[2] && numeros[3] > numeros[4]){
    alert('O maior número é: ' + numeros[3]);
}
else if(numeros[4] > numeros[0] && numeros[4] > numeros[1] && numeros[4] > numeros[2] && numeros[4] > numeros[3]){
    alert('O maior número é: ' + numeros[0]);
}
