/*1. Crie uma lista com alguns valores e imprima:
•Os valores positivos
•A média de todos os valores
*/
const lista = [1, -3, 4, 5, 6, 0, -9, -89, -5, 3];

let i=0;
let media=0;
while(i<10)
{
    if(lista[i]>=0)
    {
        console.log(`${lista[i]}`);
    }
    media +=lista[i];
    i++;
}
media=media/10;

console.log(`Media ${media}`);
