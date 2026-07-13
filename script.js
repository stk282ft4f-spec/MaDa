// =========================
// BOTONES
// =========================

const btnEntrar = document.getElementById("btnEntrar");
const bienvenida = document.getElementById("bienvenida");
const pagina = document.getElementById("paginaPrincipal");

const btnIlustracion = document.getElementById("abrirIlustracion");
const ilustracion = document.getElementById("contenedorIlustracion");

const btnCarta = document.getElementById("abrirCarta");
const carta = document.getElementById("carta");

const musica = document.getElementById("musica");
const btnMusica = document.getElementById("musicaBtn");

// La página principal empieza oculta
pagina.style.display = "none";

// Entrar
btnEntrar.addEventListener("click", () => {

    bienvenida.style.display = "none";
    pagina.style.display = "block";

});

// Mostrar ilustración
btnIlustracion.addEventListener("click", () => {

    if (ilustracion.style.display === "block") {

        ilustracion.style.display = "none";
        btnIlustracion.innerHTML = "Ábreme ❤️";

    } else {

        ilustracion.style.display = "block";
        btnIlustracion.innerHTML = "Cerrar ❤️";

    }

});

// Mostrar carta
btnCarta.addEventListener("click", () => {

    if (carta.style.display === "block") {

        carta.style.display = "none";
        btnCarta.innerHTML = "Ábreme 💌";

    } else {

        carta.style.display = "block";
        btnCarta.innerHTML = "Cerrar 💌";

    }

});

// Música
btnMusica.addEventListener("click", () => {

    if (musica.paused) {

        musica.play();
        btnMusica.innerHTML = "⏸ Pausar música";

    } else {

        musica.pause();
        btnMusica.innerHTML = "🎵 Música";

    }

});

// =========================
// CORAZONES FLOTANDO
// =========================

const contenedor = document.getElementById("corazones");

function crearCorazon() {

    const corazon = document.createElement("div");

    corazon.classList.add("corazon");

    const colores = [
        "#ff77aa",
        "#7ab8ff",
        "#ff9ed2",
        "#8fd0ff"
    ];

    corazon.innerHTML = "❤";

    corazon.style.left = Math.random() * 100 + "%";

    corazon.style.color = colores[Math.floor(Math.random() * colores.length)];

    corazon.style.fontSize = (18 + Math.random() * 18) + "px";

    corazon.style.animationDuration = (6 + Math.random() * 6) + "s";

    contenedor.appendChild(corazon);

    setTimeout(() => {

        corazon.remove();

    }, 12000);

}

setInterval(crearCorazon, 500);