//9. Crie a função Collatz que aceita como parâmetro o elemento inicial da sequencia de Collatz e retorna uma função. 
//A cada chamada dessa função, retorne o próximo elemento da sequencia.
const seq = collatz(5);
console.log(seq()); //16
console.log(seq()); //8
console.log(seq()); //4
console.log(seq()); //2
console.log(seq()); //1

function collatz(elem) {
    let inicio = elem;
    return function() {
        if (elem % 2 == 0) {
            elem /= 2;
        } else {
            elem = 3 * inicio + 1;
        }
        return elem;
    }
}