
console.log('Antes da promise.');

/*new Promise((resolve, reject) => {
    console.log('Inicio da promise.');
    resolve();
}).then(() => {
    console.log('Durante a promise.');
}).finally(() => {
    console.log('Conclusão da promise.');
});*/

function metodoAleatorio() {
    console.log('Esse método é só para demonstrar o await!');
    setTimeout(function () { 
        console.log("Time-out, já foi!")
    }, 3000);
}

new Promise (async(resolve, reject) => {
    console.log('Inicio da promise.');
    await metodoAleatorio();
    resolve();
}).then(() => {
    console.log('Durante a promise.');
}).finally(() => {
    console.log('Conclusão da promise.');
});

console.log('Depois da promise.');
