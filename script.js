// -------- Parte 1: Ejemplos -------- //

// Ejemplo 1: Click para cambiar color
document.getElementById("btnColor").addEventListener("click", function() {
    const box = document.getElementById("box1");

    // Lista de colores posibles
    const colores = ["red", "green", "blue", "orange", "purple", "pink", "yellow", "cyan" , "lightblue", "lightgreen",];

    // color aleatorio
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];

    // Cambiar el color del fondo
    box.style.backgroundColor = colorAleatorio;
});


// Ejemplo 2: Mouseover y mouseout
const box2 = document.getElementById("box2");
box2.addEventListener("mouseover", function() {
    document.getElementById("msgHover").textContent = "¡Estás sobre la caja!";
    box2.style.backgroundColor = "lightpink";
});
box2.addEventListener("mouseout", function() {
    document.getElementById("msgHover").textContent = "";
    box2.style.backgroundColor = "";
});

// Ejemplo 3: Contador de caracteres
document.getElementById("inputTexto").addEventListener("input", function() {
    const contador = document.getElementById("contador");
    contador.textContent = "Caracteres escritos: " + this.value.length;
});

// Ejemplo 4: Menú desplegable
document.getElementById("selectOpciones").addEventListener("change", function() {
    const msg = document.getElementById("opcionSeleccionada");
    msg.textContent = this.value ? "Seleccionaste: " + this.value : "";
});

// Ejemplo 5: Doble click para agrandar
const box3 = document.getElementById("box3");
box3.addEventListener("dblclick", function() {
    this.style.width = this.style.width === "200px" ? "100px" : "200px";
    this.style.height = this.style.height === "200px" ? "100px" : "200px";
});

// -------- Parte 2: Ejercicios -------- //

// Ejercicio 1: Mostrar tecla presionada
document.getElementById("inputTecla").addEventListener("keydown", function(event) {
    document.getElementById("teclaPresionada").textContent = "Tecla presionada: " + event.key;
});

// Ejercicio 2: Focus y blur
const inputBorde = document.getElementById("inputBorde");
inputBorde.addEventListener("focus", function() {
    this.classList.add("highlight");
});
inputBorde.addEventListener("blur", function() {
    this.classList.remove("highlight");
});

// Ejercicio 3: Bloquear clic derecho
document.getElementById("box4").addEventListener("contextmenu", function(event) {
    event.preventDefault();
    alert("¡Clic derecho bloqueado!");
});

// Ejercicio 4: Mouseleave
const box5 = document.getElementById("box5");
box5.addEventListener("mouseenter", function() {
    this.style.backgroundColor = "lightblue";
});
box5.addEventListener("mouseleave", function() {
    this.style.backgroundColor = "lightyellow";
});

// Ejercicio 5: Validar palabra "javascript"
document.getElementById("inputPalabra").addEventListener("keyup", function() {
    const msg = document.getElementById("validacionPalabra");
    if (this.value.toLowerCase() === "javascript") {
        msg.textContent = "¡Correcto!";
        msg.style.color = "green";
    } else {
        msg.textContent = this.value.length > 0 ? "Palabra incorrecta" : "";
        msg.style.color = "red";
    }
});