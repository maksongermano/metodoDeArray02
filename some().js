// testa se aao menos um dos elementos do array passa pelo teste, se sim, retorna boleano 
const nomes = ['joão', 'maria', 'jose', 'rodrigo'];
const numeros = [1, 3, 9, 9, 7];
// const minhaFuncaoCallBack = (elementos) 
// const resultado = nomes.some((nome) => {
//     return nome === 'maria';
// })
const resultado = numeros.some((elemento) => {
    return elemento % 2 === 0;
})
console.log(resultado)//false