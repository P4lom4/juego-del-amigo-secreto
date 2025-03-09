// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
/* Tareas específicas:



Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, 
mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."

Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos 
usando el método.push().

Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.
    */

let amigos =[];

function agregarAmigo(){
    let amigo = document.getElementById("amigo").value;//Capturar el valor del campo de entrada: 
   if (amigo=="") {  //Validar que la entrada no esta vacia.
    alert ("Por favor, inserte un nombre");
   }else{
    amigos.push(amigo);  //Actualizar el array de amigos
    document.getElementById("amigo").value="";
    console.log("amigos agreagado " +amigo); 
    console.log(amigos);
   }
}
agregarAmigo();


function sortearAmigo (){
      
    if (amigos.leght==""){//Validar que haya amigos disponibles
            agregarAmigo();
        }else{
            let numeroAleatorio= (Math.floor(Math.random(amigos.lenght)*amigos.length)+1); //Generar un índice aleatorio
            console.log("indice sorteado " +numeroAleatorio);
            amigoSorteado = amigos[numeroAleatorio];// obtener el nombre en el arreglo
            
            mostrarResultado(); //Mostrar el resultado: 
        }
}

function mostrarResultado(elemento,texto){
    let resultado=document.getElementById("resultado");
    resultado.innerHTML=`El amigo sorteado es ${amigoSorteado}`
}