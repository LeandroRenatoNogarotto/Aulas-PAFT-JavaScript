//Atividade 12
/*
Crie a função media, que recebe uma lista e opcionalmente um nome de campo. 
Caso o nome de campo seja fornecido, calcule a média dos valores desse campo
Caso não seja, faça a média utilizando os próprios elementos da lista

*/
let avg = media(albuns, "nota");
console.log(`avg:${avg}`);
let avg2 = media([1,2,3,4,5]);
console.log(`avg2:${avg2}`);
function media(lista, propriedade) {
    if (propriedade) {
        return lista.reduce((soma, item) => soma += item[propriedade], 0) / lista.length;
    }
    return lista.reduce((soma, item) => soma += item, 0) / lista.length;
}