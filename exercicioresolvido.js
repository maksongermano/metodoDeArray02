const pessoa = [
    { nome: 'maria', idade: 70 },
    { nome: 'Neurivânia', idade: 52 },
    { nome: 'Italo', idade: 28 },
    { nome: 'Makson', idade: 31 },
    { nome: 'lucas', idade: 19 },
];
const fiscalizarFesta = (arrayObjetos) => {
    const resultado = arrayObjetos.every((objeto) => {
        return objeto.idade > 17;
    });
    if (resultado) {
        console.log('festa liberada')
    } else {
        console.log('Possui menos de idade!');
    }
}

fiscalizarFesta(pessoa)