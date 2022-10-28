//4. Crie a função maior, que encontre o maior entre todos os valores passados em seus argumentos.

console.log(maior(1,10,-1,5)); //Imprime 10

console.log(maior(1,-100,5)); //Imprime 5

 

function maior(...valores) {
   if (valores.length === 0) 
      return null;
   let maior = valores[0];
   for (const valor of valores) {
      if (valor > maior) {
         maior = valor;
      }
   }
   return maior;
}