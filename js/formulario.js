const fecha = document.querySelector(".fecha");
fecha.textContent = new Date().toLocaleDateString("es-CL");

/* Constantes formulario */
const nombrer=document.getElementById("nombre-real");
const nombreha=document.getElementById("nombre-de-heroe/anti-héroe");
const email=document.getElementById("email");
const bio=document.getElementById("bio");
const enviar=document.getElementById("boton-enviar");


/* Esta funcion emite una alerta al momento de apretar el boton "enviar"  */
enviar.addEventListener("click", function(){
    alert("Su formulario ha sido enviado exitosamente");
    nombrer.value="";
    nombreha.value="";
    email.value="";
    bio.value="";
});
