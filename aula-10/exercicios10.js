/*Exercicio 04
Escreva uma função testNum que receba um número como um argumento e
retorne um Promise que resolve em caso o número seja maior que dez, ou rejeite 
caso contrário. Use-o exibindo uma mensagem em cada caso.
*/

function testNum(num) {
    return new Promise((resolve, reject) => {
        if (num > 10) {
            resolve(num);
        }  else {
            reject(num);
        }      
    });
}

testNum(7)
    .then(v => console.log(`O Numero é maior que 10: ${v}`))
    .catch(v => console.log(`O Numero não é maior que 10: ${v}`));

testNum(25)
    .then(v => console.log(`O Numero é maior que 10: ${v}`))
    .catch(v => console.log(`O Numero não é maior que 10: ${v}`));




/*Exercicio 01
Crie um timer que imprima o texto “PUCPR” a cada meio segundo.
Pare o timer após 5 execuções.
*/

let printCounter = 0;
const printPucpr = setInterval(() => {
    console.log('PUCPR');
    printCounter++;
    if (printCounter === 5) {
        clearInterval(printPucpr);
    }
},500);

/*Exercicio 02
Crie um timer que mostre no console a palavra “Pontifícia
Universidade”. Ele deve disparar um segundo timer, que mostre no
console o texto “Católica do”. Repita para um terceiro timer que mostre
o texto “Paraná”
*/

setTimeout(() => {
    console.log("Pontificia Universidade")
    setTimeout(() => {
        console.log("Católica do")
        setTimeout(() => console.log("Paraná"), 2000);
    }, 500);
}, 1000);
 
const delayedPrint = (text, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(text);
            resolve();
        }, delay)
    })
}
delayedPrint('Pontifícia Universidade', 1000)
    .then(() => delayedPrint('Católica do', 1000))
    .then(() => delayedPrint('Paraná', 1000));


/*Exercicio 05
Escreva duas funções puras que retornem Promises:
• A primeira, makeAllCaps(), receberá um array de palavras e tornará todas maiúsculas. Ela rejeitará caso o array contenha um dado que não seja string.
• A segunda, sortWords(), ordenará as palavras em ordem alfabética.
• Em seguida, teste-as
*/

function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
        const result = [];
        for (let word of words) {
            if (typeof word !== 'string') {
                reject(word);
                return;
            }
            result.push(word.toUpperCase());
        }
        resolve(result);
    });
}
function sortWords(words) {
    return new Promise((resolve, reject) => {
       resolve([...words].sort());
    });
}

makeAllCaps(["carambola", "abacaxi", "banana"])
   .then(sortWords)
   .then(console.log)
   .catch(v => console.log("Não é um texto: " + v));
