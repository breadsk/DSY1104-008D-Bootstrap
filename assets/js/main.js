
//const btnGuardar = document.querySelector("#btnGuardar");
const btnGuardar = document.getElementById("btnGuardar");

const lblEmailError = document.getElementById("lblEmailError");
const lblNombreError = document.getElementById("lblNombreError");
lblEmailError.style.display = "none";
lblNombreError.style.display = "none";

btnGuardar.addEventListener("click", function(e){
    e.preventDefault();
    let email = document.getElementById("txtEmail").value;

    if(email === "" || !email.includes("@")){
        lblEmailError.style.display = "block";
        return;
    }

    // let nombre = document.getElementById("txtNombre").value;
    // let password = document.getElementById("txtPassword").value;

    // let usuario = {
    //     email,
    //     nombre,
    //     password,
    // }
    
});


// let nombre = "Juan";
// let apellido = "Gomez";


// const saludar = (nombre) =>  { 
//     console.log(`Hola ${nombre}`);
// }

// saludar("Nicolas");

// function saludar(){    
//     console.log(`Hola ${nombre} ${apellido}`);     
// }

//console.log("Hola Mundo");
// console.warn("Esta es una advertencia");
// console.error("Esto es un error");
// console.info("Esto es información");
// console.table({nombre: "Juan", edad: 30, ciudad: "Madrid"});