document.addEventListener('DOMContentLoaded', function() {
    var searchForm = document.getElementById('searchForm');

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto

        // Obtener los valores de los campos de búsqueda
        var searchType = document.getElementById('searchType').value;
        var searchTerm = document.getElementById('searchInput').value;

        // Construir la URL de búsqueda con los parámetros necesarios
        var url = 'https://itunes.apple.com/search?term=' + encodeURIComponent(searchTerm) + '&entity=' + encodeURIComponent(searchType);

        // Realizar la solicitud fetch a la API de iTunes
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('No se pudo obtener la respuesta de la API');
                }
                return response.json(); // Convertir la respuesta en formato JSON
            })
            .then(data => {
                // Manejar los datos de la respuesta aquí
                console.log(data);
            })
            .catch(error => {
                console.error('Error al obtener los datos de la API:', error);
            });
    });
});
