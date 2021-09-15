const listaDePecas = ["Peca de teste", "ABCD", "Peca B"]

console.log("quantidade de peças")

if (listaDePecas.length <= 10) {
    console.log("as peças podem ser cadastradas");
}

console.log("quantidade de caracteres")

for (let index = 0; index < listaDePecas.length; index++) {
    const pecaAtual = listaDePecas[index];
    if (pecaAtual.length < 3) {
        console.log(pecaAtual + ": a peça possui nome inferior a 3 caracteres e não pode ser cadastrada.")
    } else {
        console.log(pecaAtual + ": a peça pode ser cadastrada.") 
    }
}

console.log("peso da peça")
const pesoDaPecaEmGramas = 50;

if (pesoDaPecaEmGramas >= 10) {
    console.log("peso suficiente.")
} else {
    console.log("valor insuficiente")
}