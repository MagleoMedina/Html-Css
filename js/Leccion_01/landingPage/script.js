document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtener el formulario y el mensaje de éxito por su ID
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    // 2. Añadir un "escuchador" de eventos al formulario, esperando el 'submit' (envío)
    contactForm.addEventListener('submit', function(event) {
        // Previene que la página se recargue, que es el comportamiento por defecto de un formulario HTML
        event.preventDefault();

        // 3. Simulación de envío de datos
        // En un escenario real, aquí se usaría la API fetch() para enviar los datos a un servidor.
        
        // 4. Muestra el mensaje de éxito
        formMessage.style.display = 'block'; // Hace visible el mensaje
        
        // 5. Opcional: Limpia el formulario después de un breve retraso
        setTimeout(() => {
            contactForm.reset();
        }, 1000); // 1 segundo de retraso
    });
});