console.log('Contador');

// Contador()


console.log('Contador');
   
    let counter = document.querySelector('#counter');
    let aumentar = document.querySelector('#aumentar');
    let disminuir = document.querySelector('#disminuir');

    let contador = 0;

    aumentar.addEventListener('click', () => {

        contador++;
        counter.textContent = contador;

    });


    disminuir.addEventListener('click', () => {
        contador--;
        counter.textContent = contador;
    });
;
