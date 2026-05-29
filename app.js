const input = document.getElementById("inputNota");
const boton = document.querySelector("#btnAgregar");
const lista = document.getElementById("listaNotas");

console.log(input);
console.log(boton);
console.log(lista);

// ARRAY DE NOTAS

let notas = [];


// CARGAR LOCAL STORAGE

const notasGuardadas = localStorage.getItem("notas");

if (notasGuardadas) {

    notas = JSON.parse(notasGuardadas);

    notas.forEach(nota => {

        crearNota(nota);

    });

    console.log("Notas cargadas:", notas.length);

}


// BOTÓN AGREGAR

boton.addEventListener("click", () => {

    const texto = input.value;

    if (texto === "") {

        alert("Escribe una nota");

        return;
    }

    notas.push(texto);

    localStorage.setItem(
        "notas",
        JSON.stringify(notas)
    );

    crearNota(texto);

    input.value = "";

    input.focus();

    console.log("Nota agregada");

});


// FUNCIÓN CREAR NOTA

function crearNota(texto) {

    const li = document.createElement("li");

    li.textContent = texto + " ";

    const btnEliminar = document.createElement("button");

    btnEliminar.textContent = "Eliminar";



    btnEliminar.addEventListener("click", () => {

        lista.removeChild(li);
        notas = notas.filter(
            nota => nota !== texto
        );
        localStorage.setItem(
            "notas",
            JSON.stringify(notas)
        );

        console.log("Nota eliminada");

    });



    li.appendChild(btnEliminar);


    lista.appendChild(li);

}
