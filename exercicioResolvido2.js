const arquivos = [
    'teste.bat',
    'foto.png',
    'contrato de locação',
    'ilustrador'
];

const antivirus = (arayArquivos) => {
    const resultado = arayArquivos.some((arquivo) => {
        const existeExtenção = arquivo.indexOf('bat');
        return existeExtenção !== -1
    });
    if (resultado) {
        console.log('Virus Detectado');

    } else {
        console.log('nenhum Virus encontrado');
    }

}

antivirus(arquivos);
