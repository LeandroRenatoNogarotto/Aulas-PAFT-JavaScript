/*
2.Leia um número e aplique sobre ele a conjectura de
Collatz
.
Ela diz que uma sequencia pode ser feita com base na seguinte
regra:
•Se o número n for par, o próximo é n/ 2
•Se for ímpar é 3n+1
•A sequencia termina em 1
*/

let num = prompt('entre com o num:');
while(num != 1){
    if(num % 2 == 0){
        num /= 2;
    }else{
        num = num*3 + 1;
    }
    console.log(num);
}
console.log(`num final:${num}`);