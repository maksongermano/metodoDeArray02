// testa todos os elementos do array passam peloteste implementado na função callback, passada como argumento e retorna true ou fouse.
// const numeros = [1, 2, 3, 45, 6]
// numeros.every((elementoAtual){
//     return elementoAtual < 5;

// });
// return true

const frutas = ['abacaxi', 'mango', 'melancia']
const numeros = [1, 2, 3, 4, 5]
// const resultado = frutas.every((elementoAtual) => {
//     return elementoAtual !== 'mango'
// });
const resultado = numeros.every((numero) => {
    return numero < 5;
})


console.log(resultado)//fouse, ele sempre retorna com valor buleano