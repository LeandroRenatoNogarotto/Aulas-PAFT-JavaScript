//2.Crie uma função chamada menos. Caso seja passado apenas 1 parâmetro, retorne o valor negativo. Caso sejam passados 2, retorne a subtração dos dois. Exemplo:

console.log(menos(10)); //Imprime -10
console.log(menos(5,2)); //Imprime 3

function menos(a, b) {
    if (b === undefined) {
        return -a;
    }
    return a - b;
}