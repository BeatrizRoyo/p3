document.addEventListener('DOMContentLoaded', function() {
    // Obtener el botón "¡Estoy Preparado!"
    const btnPreguntas = document.getElementById('btn-preguntas');
    // Obtener la sección de instrucciones y preguntas
    const instructionsSection = document.getElementById('instructions-section');
    const questionsSection = document.getElementById('questions-section');
    // Obtener la sección "Siguiente"
    const afterQuestionsSection = document.getElementById('after-qs');
    // Contador de respuestas correctas
    let correctAnswersCount = 0;

    // Ocultar la sección de preguntas inicialmente
    questionsSection.style.display = 'none';

    // Agregar un event listener para el clic en el botón
    btnPreguntas.addEventListener('click', function() {
        // Ocultar la sección de instrucciones
        instructionsSection.style.display = 'none';

        // Mostrar la sección de preguntas
        questionsSection.style.display = 'block';

        // Mostrar la sección "Siguiente"
        afterQuestionsSection.style.display = 'block';
    });

    afterQuestionsSection.addEventListener('click',function(){
        localStorage.setItem('respuestasCorrectas', correctAnswersCount);
        window.location.href='afterQs.html';

    })


    // Obtener las preguntas del almacenamiento local
    const storedQuestions = localStorage.getItem('preguntas');
    if (!storedQuestions) {
        console.error('No se encontraron preguntas en el almacenamiento local');
        return;
    }

    const questionsData = JSON.parse(storedQuestions);

    // Iterar sobre cada pregunta y agregarla al DOM
    questionsData.results.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        // Agregar el enunciado de la pregunta
        const questionTitle = document.createElement('h2');
        questionTitle.textContent = `Pregunta ${index + 1}: ${question.question}`;
        questionDiv.appendChild(questionTitle);

        // Mezclar respuestas incorrectas y correctas
        const answers = [...question.incorrect_answers, question.correct_answer];
        answers.sort(() => Math.random() - 0.5);

        // Agregar las opciones de respuesta
        const answersList = document.createElement('ul');
        answers.forEach(answer => {
            const answerItem = document.createElement('li');
            const answerButton = document.createElement('button');
            answerButton.textContent = answer;
            answerButton.addEventListener('click', () => {
                handleAnswer(answerButton, question.correct_answer, questionDiv);
            });
            answerItem.appendChild(answerButton);
            answersList.appendChild(answerItem);
        });

        questionDiv.appendChild(answersList);
        questionsSection.appendChild(questionDiv);
    });

    // Función para manejar la selección de respuesta
    function handleAnswer(button, correctAnswer, questionDiv) {
        const answerButtons = questionDiv.querySelectorAll('button');
        
        // Verificar si la pregunta ya ha sido respondida
        if (!questionDiv.classList.contains('answered')) {
            questionDiv.classList.add('answered');

            answerButtons.forEach(btn => {
                btn.disabled = true;
                if (btn === button) {
                    if (btn.textContent === correctAnswer) {
                        btn.style.backgroundColor = 'green';
                        correctAnswersCount++;
                    } else {
                        btn.style.backgroundColor = 'red';
                    }
                } else {
                    btn.style.backgroundColor = 'red';
                }
            });

            // Actualizar el contador de respuestas correctas
            const correctAnswersCounter = document.getElementById('correct-answers-counter');
            correctAnswersCounter.textContent = correctAnswersCount;

            // Verificar si se alcanzó el 30% de respuestas correctas
            verifica30(correctAnswersCount);
        }
    }

    // Función para verificar si se alcanzó el 30% de respuestas correctas
    function verifica30(nCAnswers) {
        if (nCAnswers >= 3) {
            // Código para mostrar alguna otra sección o realizar alguna acción
        }
    }
});
