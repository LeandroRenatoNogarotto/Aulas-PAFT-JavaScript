const albuns = [
    {nome: "Mais", cantor: "Marisa monte", ano: 1991, nota: 8.5},
    {nome: "A tempestade", cantor: "Legião Urbana", ano: 1996, nota: 9.5},
    {nome: "Domingo", cantor: "Titãs", ano: 1995, nota: 7.5},
    {nome: "Ouro de Minas", cantor: "Roupa Nova", ano: 2001, nota: 8},
    {nome: "Como estão vocês", cantor: "Titãs", ano: 2003, nota: 7},
    {nome: "Troco Likes", cantor: "Thiago Iorc", ano: 2015, nota: 4.5},
    {nome: "Dois", cantor: "Legião Urbana", ano: 1986, nota: 10},
    {nome: "Radiola", cantor: "Skank", ano: 2004, nota: 6.5},
    {nome: "Roupa acústico", cantor: "Roupa Nova", ano: 2004, nota: 9},
    {nome: "Umbilical", cantor: "Thiago Iorc", ano: 2011, nota: 3.5},
    {nome: "Barulhinho bom", cantor: "Marisa monte", ano: 1996, nota: 7.5}
];

const cantores = [
    {nome: "Vinícius de Moraes", estilo: "MPB"},
    {nome: "Rita Lee", estilo: "Rock"},
    {nome: "Marisa monte", estilo: "MPB"},
    {nome: "Legião Urbana", estilo: "Rock"},
    {nome: "Titãs", estilo: "Rock"},
    {nome: "Roupa Nova", estilo: "Pop rock"},
    {nome: "Thiago Iorc", estilo: "Nova MPB"},
    {nome: "Skank", estilo: "Pop rock"}
];

//Atividade 8
/*
Crie a função between que recebe uma data, uma data de inicio, outra de fim e uma terceira data. Teste se a data está no meio desse intervalo. Adicione um objeto desestruturado opcional no quarto parâmetro para permitir os parâmetros opcionais inclusiveStart e inclusiveEnd

*/
function between(date, date1, date2, {inclusiveStart = false, inclusiveEnd = false} = {}) {
    if (inclusiveStart && inclusiveEnd) {
        return date >= date1 && date <= date2;
    }
    if (inclusiveStart) {
        return date >= date1 && date < date2;
    }
    if (inclusiveEnd) {
        return date > date1 && date <= date2;
    }
    return date > date1 && date < date2;
}
console.log(`between:${between(new Date(2020, 1, 2), new Date(2020, 1, 1), new Date(2020, 1, 3))}`);
