/*2. Crie o jogo de adivinhar um número de 1 até 100.
•Caso ele entre um número maior escreva “Maior”
•Caso ele entre um número menor escreva “Menor”
•Caso ele entre com um número fora do intervalo ( 0 ou maior que 100) fale “desistiu?“ e acabe o jogo
•O jogo deve perguntar até o usuário desistir ou falar o valor correto.
*/

const numeroCorreto = 9;
let numero = 9;

let = console.log("digite um numero");
while(numero!=numeroCorreto)
{
    let = console("digite um numero");
    if(numero>100 || numero<0)
    {
        console.log("desistiu?");
        exit(1);
    }

    if(numero<numeroCorreto)
    {
        console.log("Menor!");
    }

    if(numero>numeroCorreto)
    {
        console.log("Maior!");
    }
}