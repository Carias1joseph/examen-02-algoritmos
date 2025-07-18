console.log('Tablas');


let numero = document.getElementById('number');
let limite = document.getElementById('limit');
let resultadoTabla = document.getElementById('result');
let generarTabla = document.getElementById('generar-tabla');

console.log('hola');


generarTabla.addEventListener('click', () => {
    resultadoTabla.textContent = ''; 
    
    const num = parseInt(numero.value);
    const lim = parseInt(limite.value);

    for (let i = 1; i <= lim; i++) {
        let resultado = num * i;
        resultadoTabla.textContent += `${num} x ${i} = ${resultado}\n`;
    }
});
