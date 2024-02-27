document.addEventListener('DOMContentLoaded', function() {
    const respuestasCorrectasElement = document.getElementById('respuestas-correctas');

    const respuestasCorrectas = localStorage.getItem('respuestasCorrectas');

    const mensajeCorrecto = document.getElementById('msj');

    const btnBuscador = document.getElementById('btn2api');

    // Verificar si se recuperó correctamente el número de respuestas correctas
    if (respuestasCorrectas !== null) {
        respuestasCorrectasElement.textContent = ` ${respuestasCorrectas}`;
        verifica30(respuestasCorrectas, mensajeCorrecto,btnBuscador);
        btnBuscador.addEventListener('click',function(){
            window.location.href='buscador.html';
        });


    } else {
        respuestasCorrectasElement.textContent = 'No se encontraron respuestas correctas guardadas';

    }

    
});

function verifica30(nCAnswers,mensajeCorrecto,btnBuscador) {
    if (nCAnswers >= 3) {
        mensajeCorrecto.textContent = 'Ya que has tenido mas de 4 aciertos, se acaba de desbloquear el buscador gratuito'
        btnBuscador.style.display = 'block';

    }else{
        btnBuscador.style.display = 'none';
        mensajeCorrecto.textContent = 'No has conseguido 3 aciertos o más, vuelvelo a intentar para poder utilizar el buscador'


    }
}


