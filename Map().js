// Executa função callback passada como argumento para cada elemento do array e retorna um novo arraycomo resultado.
//ps. o array original não é alterado
const pessoas = [
    { nome: 'João', idade: 20, sobrenome: 'Silva' },
    { nome: 'Maria', idade: 25, sobrenome: 'Souza' },
    { nome: 'Pedro', idade: 30, sobrenome: 'Almeida' },
    { nome: 'Lucas', idade: 22, sobrenome: 'Ferreira' },
    { nome: 'Ana', idade: 27, sobrenome: 'Nunes' },
    { nome: 'Gabriel', idade: 24, sobrenome: 'Costa' },
    { nome: 'Carla', idade: 28, sobrenome: 'Gomes' },
    { nome: 'Fernanda', idade: 26, sobrenome: 'Ribeiro' },
    { nome: 'Rafael', idade: 29, sobrenome: 'Santos' },
    { nome: 'Mariana', idade: 23, sobrenome: 'Oliveira' }
];

const novoArray = pessoas.map((usuário) => {
    return {
        nomeCompleto: `${usuário.nome} ${usuário.sobrenome}`, idade: usuário.idade
    }
});

console.log(novoArray)