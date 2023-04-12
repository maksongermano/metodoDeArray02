const pessoa = [
    { nome: 'maria', idade: 70 },
    { nome: 'Neurivânia', idade: 52 },
    { nome: 'Italo', idade: 28 },
    { nome: 'Makson', idade: 31 },
    { nome: 'lucas', idade: 19 },
];
const nomes = ['maria', 'pedro', 'makson', 'italo']
// const resultado= pessoa.find((usuario)=>{
// return usuario.nome === 'maria';
// })

const resultado = nomes.find((nome) => {
    return nome === 'maria';
})
console.log(resultado)