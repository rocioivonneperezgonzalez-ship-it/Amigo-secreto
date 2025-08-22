// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// 1. Array para guardar los nombres
let amigos = [];

// 2. Función para agregar amigos 
function agregarAmigo () {
    //Capturar el valor del input 
    let input = document.getElementById ("amigo"); 
    let nombre = input.value.trim (); 

    //Validar la entrada 
    if (nombre === "") {
        alert ("Por favor, inserte un nombre"); 
        return; 
    }

    // Añadir al array 
    amigos.push (nombre); 

    //Limpiar el campo de entrada 
    input.value = ""; 

    //Mostrar lista actualizada de nombres
    mostrarLista (); 
}

// 3 Función para recorrer el array y mostrar la lista en el <ul>
function mostrarLista () {
    // Obtener el elemento de la lista 
    let lista = document.getElementById ("listaAmigos");

    // limpiar lista existente 
    lista.innerHTML = ""; 

    // recorrer el array con un bucle for 
    for ( let i = 0; i < amigos.length; i++) {
        // crear un nuevo <li> para cada amigo 
        let li = document.createElement ("li")
        li.textContent = amigos [i]; 

        //agregar a la lista 
        lista.appendChild (li); 
    }

}

// 4. Función para selecionar aleatoriamente un amigo 
function sortearAmigo () {
    //Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert ("Agregar al menos un nombre antes de sortear"); 
        return; 
    }

// Generar índice aleatorio
let indiceAleatorio = Math.floor(Math.random()*amigos.length); 

// Obtener el nombre sosrteado
let amigoSecreto = amigos [indiceAleatorio]; 

// Mostrar el resultado 
let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar antes de mostrar nuevo resultado

    let li = document.createElement("li");
    li.textContent = `Tu amigo secreto es 🐱: ${amigoSecreto}`;
    resultado.appendChild(li);

}
