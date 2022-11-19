//1. Para praticar a sintaxe, experimente criar um objeto chamado Circulo com raio 3.

const Circulo = {
    raio: 3
}

const Circulo2 = {
    raio: 4
}

const Circulo3 = {
    raio: 5
}
//2. Em seguida, programe os métodos para calcular a área (PI*raio*raio) e o perímetro do círculo (2*PI*raio)
PI = 3.14;

function calc_area(){
    return (PI*this.raio*this.raio);
}
function calc_perimetro(){
    return (2*PI*this.raio);
}
Circulo.calc_area = calc_area;
Circulo.calc_perimetro = calc_perimetro;

console.log(Circulo1.calc_area());

//3. Altere seu objeto círculo para utilizar a sintaxe com uma função construtora chamada Circulo

function criarCirculo(raio){
    return {
        raio,
        calc_area,
        calc_perimetro
    }
}
const circulo3 = criarCirculo(4);

console.log(circulo3.raio);
//4. Crie 2 círculos de raios diferentes. E imprima sua área e perímetro

const c1 = {
    raio: 2,
    area: calc_area,
    perimetro: calc_perimetro
}
const c2 = {
    raio: 4,
    area: calc_area,
    perimetro: calc_perimetro

}
console.log("c1: area = " + c1.area() + "    perimetro = " + c1.perimetro());
console.log("c2: area = " + c2.area() + "    perimetro = " + c2.perimetro());
