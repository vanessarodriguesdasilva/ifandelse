//Enunciado: Crie uma função chamada idadeParaAposentadoria que receba a idade de uma pessoa e retorne uma mensagem indicando se ela já pode se aposentar ou ainda precisa trabalhar. Considere que a idade mínima para aposentadoria é 65 anos.
    let idade = Number(prompt("Digite sua idade para a verificação da disponibilidade de sua aposentadoria: "))

    if (idade >= 65){
        alert("Você já pode se aposentar!")
    }
    else{
        alert("Você não pode se aposentar.")
    }