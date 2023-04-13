//Cria um novo array com todos os elementos coorespondentes a condição implementada como função callback, passada como argumento.
const numeros = [1, 4, 4, 4, 5, 5, 7, 8, 3, 34, 56,]
const resultadoNumeros = numeros.filter((numero) => {
    return numero === 4
});

console.log(resultadoNumeros)//[ 4, 4, 4 ]
console.log(numeros)