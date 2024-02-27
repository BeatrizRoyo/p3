document.addEventListener('DOMContentLoaded', function() {
    // Obtener el elemento donde quieres mostrar el número de respuestas correctas
    const respuestasCorrectasElement = document.getElementById('respuestas-correctas');

    // Recuperar el número de respuestas correctas guardado en localStorage
    const respuestasCorrectas = localStorage.getItem('respuestasCorrectas');

    const mensajeCorrecto = document.getElementById('msj');

    const btnBuscador = document.getElementById('btn2api');

    // Verificar si se recuperó correctamente el número de respuestas correctas
    if (respuestasCorrectas !== null) {
        // Mostrar el número de respuestas correctas en el elemento correspondiente
        respuestasCorrectasElement.textContent = ` ${respuestasCorrectas}`;
        verifica30(respuestasCorrectas, mensajeCorrecto,btnBuscador);
        btnBuscador.addEventListener('click',function(){
            window.location.href='buscador.html';
        });


    } else {
        // En caso de que no se haya encontrado el número de respuestas correctas en localStorage
        respuestasCorrectasElement.textContent = 'No se encontraron respuestas correctas guardadas';

    }

    
});

function verifica30(nCAnswers,mensajeCorrecto,btnBuscador) {
    if (nCAnswers >= 3) {
        // Código para mostrar alguna otra sección o realizar alguna acción
        mensajeCorrecto.textContent = 'Ya que has tenido mas de 4 aciertos, se acaba de desbloquear el buscador gratuito'
        btnBuscador.style.display = 'block';

    }else{
        btnBuscador.style.display = 'none';
        mensajeCorrecto.textContent = 'No has conseguido 3 aciertos o más, vuelvelo a intentar para poder utilizar el buscador'


    }
}


