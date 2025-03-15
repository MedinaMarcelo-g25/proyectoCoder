// Traer el formulario de contacto  
const contactForm = document.getElementById('contactForm');  

// Manejo del envío del formulario  
function manejoEnvioForm(evento) {  
    evento.preventDefault();  

    // Obtención de valores del formulario  
    const nombre = document.getElementById('name').value;  
    const email = document.getElementById('email').value;  
    const telefono = document.getElementById('phone').value;  
    const mensaje = document.getElementById('message').value;  

    // Validación de datos  
    if (!nombre || !email || !telefono || !mensaje) {  
        alert("Por favor, completa todos los campos obligatorios.");  
        return;  
    }  

    // Mostrar la consulta en la consola  
    mostrarConsulta(nombre, email, telefono, mensaje);  

    // Reseteado del form después del envio   
    contactForm.reset();  
}  

// Mostrar la consulta en la consola  
function mostrarConsulta(nombre, email, telefono, mensaje) {  
    console.log("Consulta recibida:");  
    console.log(`Nombre: ${nombre}`);  
    console.log(`Email: ${email}`);  
    console.log(`Teléfono: ${telefono}`);  
    console.log(`Mensaje: ${mensaje}`);  

    // Notificar al usuario confirmando el envío  
    alert("Tu consulta ha sido enviada exitosamente. ¡Gracias!");  
}  

// Evento para manejar el envío del formulario  
contactForm.addEventListener('submit', manejoEnvioForm);  