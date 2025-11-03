const fecha = document.querySelector(".fecha");
fecha.textContent = new Date().toLocaleDateString("es-CL");

const audio= document.getElementById('audio')

audio.volume= 0.5;