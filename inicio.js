document.addEventListener('DOMContentLoaded', function() {
    // Espera a que el DOM esté completamente cargado para agregar el controlador de eventos al botón
    var startButton = document.getElementById('start-btn');

    startButton.addEventListener('click', function() {
        // Realiza una solicitud GET a la nueva URL de la API
        fetch('https://opentdb.com/api.php?amount=10&category=12&difficulty=easy')
            .then(response => {
                if (!response.ok) {
                    throw new Error('No se pudo obtener la respuesta de la nueva API');
                }
                return response.json(); // Convierte la respuesta en formato JSON
            })
            .then(data => {
                // Guarda los datos en el almacenamiento local
                localStorage.setItem('preguntas', JSON.stringify(data));
                // Redirige a preguntas.html
                window.location.href = 'preguntas.html';
            })
            .catch(error => {
                console.error('Error al obtener los datos de la nueva API:', error);
            });
    });
});
