/*
 Chico tem 1,50 metro e cresce 2 centímetros por ano, enquanto Zé tem 1,10 metro e cresce 3
centímetros por ano. Construa um algoritmo que calcule e imprima as alturas de Chico e Zé até que
Zé seja maior que Chico
*/

let chico = 1.50;
let ze = 1.1;
let ano = 0;
while(chico > ze){
    chico += 0.02;
    ze += 0.03;
    ano++;
    console.log(`${ano}:Chico(${chico}) X Zé:(${ze})`);
}