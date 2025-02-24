// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];



function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();  // Elimina espacios en blanco

    console.log("Valor ingresado:", nombre);

    if (!nombre) {  // Verifica si está vacío
        alert("Por favor, inserte un nombre.");
        return;  // Detiene la ejecución aquí
    }

    amigos.push(nombre);  // Agrega el nombre a la lista
    actualizarLista();
    input.value = "";  // Limpia el input
    input.focus();  // Devuelve el cursor al input
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {  // Validar si hay amigos en la lista
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indiceGanador = Math.floor(Math.random() * amigos.length); // Número entre 0 y el tamaño del array
    let ganador = amigos[indiceGanador];  // Seleccionar el amigo en ese índice

       // Seleccionar el elemento donde se mostrará el resultado
       let resultado = document.getElementById("resultado");

       // Actualizar el contenido con el ganador
       resultado.innerHTML = `<li>🎉 El ganador es: <strong>${ganador}</strong> 🎉</li>`;
}