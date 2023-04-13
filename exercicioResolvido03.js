

const veiculo = [
    {
        nome: "Gol",
        marca: "Volkswagen",
        ano: 2020,
        modelo: "Gol G7",
        motor: "1.0",
        cor: "preto"
    },
    {
        nome: "Onix",
        marca: "Chevrolet",
        ano: 2021,
        modelo: "Onix Plus",
        motor: "1.0 Turbo",
        cor: "branco"
    },
    {
        nome: "HB20",
        marca: "Hyundai",
        ano: 2022,
        modelo: "HB20 Nova Geração",
        motor: "1.0 Turbo",
        cor: "prata"
    },
    {
        nome: "Corolla",
        marca: "Toyota",
        ano: 2021,
        modelo: "Corolla XEi",
        motor: "2.0 Flex",
        cor: "vermelho"
    },
    {
        nome: "Civic",
        marca: "Honda",
        ano: 2022,
        modelo: "Civic Touring",
        motor: "1.5 Turbo",
        cor: "azul"
    },
    {
        nome: "Argo",
        marca: "Fiat",
        ano: 2021,
        modelo: "Argo Trekking",
        motor: "1.3 Firefly",
        cor: "verde"
    },
    {
        nome: "Kwid",
        marca: "Renault",
        ano: 2022,
        modelo: "Kwid Outsider",
        motor: "1.0 SCe",
        cor: "cinza"
    },
    {
        nome: "T-Cross",
        marca: "Volkswagen",
        ano: 2021,
        modelo: "T-Cross Highline",
        motor: "1.4 TSI",
        cor: "azul"
    },
    {
        nome: "Renegade",
        marca: "Jeep",
        ano: 2022,
        modelo: "Renegade Moab",
        motor: "2.0 Diesel",
        cor: "preto"
    },
    {
        nome: "Compass",
        marca: "Jeep",
        ano: 2022,
        modelo: "Compass Limited",
        motor: "2.0 Diesel",
        cor: "branco"
    }
];

const buscarCarro = (marca, arrayCarros) => {
    const resultado = arrayCarros.find((carro) => {

        return carro.marca === marca
    })
    console.log(resultado)
}

buscarCarro('Jeep', veiculo);
// o intuito do find é tetornar a primeira ocorrência do que você pediu.