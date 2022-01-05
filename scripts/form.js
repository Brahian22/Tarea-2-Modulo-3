let boton = document.getElementById("boton");
const formulario = document.getElementById("form-register");
const listar = document.getElementById("listar");
let datos = [];

boton.addEventListener("click", e => {
    e.preventDefault();
    let nombre = document.getElementById("nombres").value
    let apellidos = document.getElementById("apellidos").value
    let telefono = document.getElementById("telefono").value
    let dirección = document.getElementById("direccion").value;
    let observaciones = document.getElementById("observaciones").value

    console.log(nombre,apellidos,telefono,dirección,observaciones)

    validar (nombre,apellidos,telefono,dirección,observaciones)

})

const agregarUsuario = (nombre,apellidos,telefono,direccion,observaciones)=>{
    let registro = {
        nombre:nombre,
        apellidos:apellidos,
        telefono:telefono,
        dirección:direccion,
        observaciones:observaciones,
    }
    datos.push(registro)
    console.log(datos)
    guardarDatos()
}

const guardarDatos = () =>{
    localStorage.setItem("usuario", JSON.stringify (datos))
   
    
}

function validar(nombre,apellidos,telefono,direccion,observaciones){
    if(isNaN(telefono)){
        const validar = document.getElementById('alerta');
    validar.innerHTML = '';
    validar.innerHTML += `
    <div class="alert alert-danger alert-dismissible fade-show " role="alert"> Debes digitar un número de Telefono
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`
    }
else {
    agregarUsuario(nombre,apellidos,telefono,direccion,observaciones)
}
}


