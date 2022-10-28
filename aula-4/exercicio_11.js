//Atividade 11
/*
Crie a função paginador que recebe uma lista e um tamanho de página. 
Ela deve retonar outra função que quando chamada com um número de página, retorne apenas os elementos daquela página

*/
let pagina = paginador(albuns, 3);
console.log(pagina(1));

function paginador(lista, tamanhoPagina = 10) {
    return function(nrPagina = 0) {
        const inicio = nrPagina * tamanhoPagina;
        const fim = (nrPagina+1) * tamanhoPagina;

        return lista.slice(inicio, fim);
    }
}
