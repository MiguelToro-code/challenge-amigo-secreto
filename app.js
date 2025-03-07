// Miguel Toro
// 20-ENE-2025
/*
Esta aplicación permite a los usuarios ingresar nombres de amigos en una lista 
para luego realizar un sorteo aleatorio y determinar quién es el "amigo secreto".

El usuario deberá agregar nombres mediante un campo de texto y un botón "Adicionar".
Los nombres ingresados se mostrarán en una lista visible en la página, 
y al finalizar, un botón "Sortear Amigo" seleccionará uno de los nombres de forma aleatoria, 
mostrando el resultado en pantalla.

Fucionalidades:
Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto 
                 y lo agregarán a una lista visible al hacer clic en "Adicionar".

Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta 
                 pidiendo un nombre válido.

Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente 
                  un nombre de la lista y se mostrará en la página.
*/

// declaración de variable de tipo array, que almacenará los nombres de los amigos ingresados. 

let amigos = [];
let cantidadDeAmigos = 0;
let amigoIngresado = "";

function agregarAmigo(){
    /*
    Permite al usuario ingresar un nombre en el campo de texto y 
    añadirlo a la lista de amigos creada anteriormente.
    
    Tareas específicas:
    Captura el valor del campo de entrada 
    Valida la entrada: valida de que el campo no esté vacío.
        si está vacío, muestra un alert con un mensaje de error: "Por favor, inserte un nombre."
    Valida que el nombre no haya sido ingresado antes, para esto convierte el valor ingresado a mayúsculas    
    Actualiza el array de amigos: Si el valor es válido, 
        lo añade al arreglo que almacena los nombre de amigos.
    Limpia el campo de entrada: restablece el campo de texto a una cadena vacía.
*/

// captura el valor del campo de entrada
    amigoIngresado = capturaAmigo();
    
    if (amigoIngresado != ""){
                if (amigos.includes(amigoIngresado)){
            alert("Ya habías ingresado a: " + amigoIngresado);
            }
        else {
        cantidadDeAmigos += 1;
        amigos.push(amigoIngresado);
        document.getElementById("amigo").value = '';
        }
    document.getElementById("amigo").value = '';
    };
    actualizaListaDeAmigos(amigos);
};

function capturaAmigo(){
    let capturaMayusculas ="";
    let captura = document.getElementById("amigo").value;
    capturaMayusculas = captura.toUpperCase();
    if (captura != "" ){
        return(capturaMayusculas);
        }
    else {
        alert("Por favor, inserte un nombre");
        return("");
         };
    }

function actualizaListaDeAmigos(lista){
    /*
    Recorre el array amigos y agrega cada nombre como un elemento <li> dentro de una lista HTML. 
    Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.
    Tareas específicas:
    Obtener el elemento de la lista: Utilizar document.getElementById() o 
        document.querySelector() para seleccionar la lista donde se mostrarán los amigos.
    Limpiar la lista existente: Establecer lista.innerHTML = "" 
        para asegurarse de que no haya duplicados al actualizar.
    Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) 
        para cada título.
    Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.
    */
    let listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = "";
    lista.forEach(elemento => {
        const li = document.createElement("li");
        li.textContent = elemento;
        listaHTML.appendChild(li);
    });
}

function sortearAmigo(){
    /*
    Función que selecciona de manera aleatoria uno de los nombres almacenados en el array amigos. 
        Usa Math.random() y Math.floor() para obtener un índice aleatorio.

    Tareas específicas:
    Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.
    Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del 
        arreglo.
    Obtener el nombre sorteado: Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.
    Mostrar el resultado: Actualizar el contenido del elemento de resultado utilizando document.getElementById() 
    e innerHTML para mostrar el amigo sorteado.
    */
   if (cantidadDeAmigos == 0){
        let limpiaLista = document.getElementById("listaAmigos");
        limpiaLista.innerHTML = "";
        alert("Ingresar algunos amigos para sortear");
        return;
   }
   let amigoSorteado =  Math.floor(Math.random()*cantidadDeAmigos);
      let listaHTML = document.getElementById("listaAmigos");
   listaHTML.innerHTML = `Tu amigo secreto es: ${amigos[amigoSorteado]}`;
   cantidadDeAmigos = 0;
   amigos = [];
}

