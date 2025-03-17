const amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);

    actualizarListaAmigos();

    input.value = "";
}

function actualizarListaAmigos() {

    const listaAmigos = document.getElementById("listaAmigos");

    listaAmigos.innerHTML = "";


    for (let i = 0; i < amigos.length; i++) {
        listaAmigos.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo() {

    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceAleatorio];

    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `<li>${amigoSorteado}</li>`;
}