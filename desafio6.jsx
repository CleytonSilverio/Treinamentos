let itens = [{
    nome: 'teste',
    idade: '2'
},
{
    nome: 'teste2',
    idade: '3'
},
{
    nome: 'teste3',
    idade: '4'
}
];

itens.forEach(separador => {
    console.log('Iteração foreach de:', separador);
});

for(var array in itens){
    console.log('Iteração for-in', itens[array]);
}

itens.map(separador =>{
    console.log('Iteração map:', separador);
});

for(let variable of itens){
    console.log('Iteração for of',variable);
}

for(var i = 0; i < itens.length ; i++){
    console.log("Iteração for", itens[i]);
}
