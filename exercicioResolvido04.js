const objetos = [
    { nome: "João", stack: "frontend" },
    { nome: "Maria", stack: "backend" },
    { nome: "Pedro", stack: "backend" },
    { nome: "Luiza", stack: "frontend" },
    { nome: "Antônio", stack: "frontend" },
    { nome: "Carla", stack: "backend" },
    { nome: "Rafael", stack: "backend" }
];
const profBack = objetos.filter((professor) => {
    return professor.stack === 'backend';
});
const profFront = objetos.filter((professor) => {
    return professor.stack === 'frontend';
});
console.log(profFront)
console.log(profBack)
