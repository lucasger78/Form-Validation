const submitFunction = (event)=>{
    if(!validarFormulario()){
        event.preventDefault();
    }else{
        event.preventDefault();
        alert(
            'Nombre: ' + document.getElementById('nombre').value + '\n' +
            'Apellido: ' + document.getElementById('apellido').value + '\n' +
            'DNI: ' + document.getElementById('documento').value + '\n' +
            'Edad: ' + document.getElementById('edad').value + 'Años' + '\n' +
            'E-mail: ' + document.getElementById('email').value + '\n' +
            'Profesión: ' + document.getElementById('actividad').value + '\n' +
            'Estudios: ' + document.getElementById('nivelEstudio').value + '\n'
        )
    }
}


document.getElementById('formulario').addEventListener('submit', submitFunction)

function validarFormulario(){
    const camposTexto = document.querySelectorAll('input[type=text]')
    let validacionCorrecta = true


    //VALIDACIÓN CAMPOS DE TEXTO
    camposTexto.forEach(campo => {
        let errorCampo = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1))
        if(campo.value.length == ''){
            mostrarError(errorCampo, 'Este campo es Requerido!')
            validacionCorrecta = false
        }else if (campo.value.length > 0 && campo.value.length <3){
            mostrarError(errorCampo, 'Este campo debe contener al menos 3 caracteres!')
            validacionCorrecta = false
        }else{
            ocultarError(errorCampo)
        }
    })

    //VALIDACIÓN EMAIL
    const email = document.getElementById('email')
    let errorEmail = document.getElementById('errorEmail')

    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){
        ocultarError(errorEmail)
    }else{
        mostrarError(errorEmail, 'Ingrese un e-mail válido!')
    }

    //VALIDACIÓN EDAD
    const edad = document.getElementById('edad')
    let errorEdad = document.getElementById('errorEdad')
    if (edad.value < 18){
        mostrarError(errorEdad, 'Para entrar tienes que ser mayor de 18 años!')
        validacionCorrecta = false
    }else{
        ocultarError(errorEdad)        
    }

     //VALIDACIÓN ACTIVIDAD
    const actividad = document.getElementById('actividad')    
    const errorActividad = document.getElementById('errorActividad')

    if (actividad.value == ''){
        mostrarError(errorActividad, 'Debes seleccionar una actividad!')
        validacionCorrecta = false
    }else{
        ocultarError(errorActividad)        
    }

     //VALIDACIÓN NIVEL DE ESTUDIOnivelEstudio
     const nivelEstudio = document.getElementById('nivelEstudio')    
     const errorNivelEstudio = document.getElementById('errorNivelEstudio')
 
     if (nivelEstudio.value == ''){
         mostrarError(errorNivelEstudio, 'Debes seleccionar una Opción!')
         validacionCorrecta = false
     }else{
         ocultarError(errorNivelEstudio)        
     }

     //VALIDACIÓN DE TÉRMINOS Y CONDICIONES
     const aceptoTerminos = document.getElementById('aceptoTerminos')
     const errorAceptoTerminos = document.getElementById('errorAceptoTerminos')

     if (!aceptoTerminos.checked){
        mostrarError(errorAceptoTerminos, 'Debes Aceptar los Términos y Condiciones!')
        validacionCorrecta = false
    }else{
        ocultarError(errorAceptoTerminos)        
    }

    return validacionCorrecta //ESTO VA A DECIR SI EL FORMULARIO COMPLETO ES VÁLIDO O NO 



}


const mostrarError = (elemento, mensaje)=>{
    elemento.textContent = mensaje;
    elemento.style.display = 'block';
}

const ocultarError = (elemento)=>{
    elemento.textContent = '';
    elemento.style.display = 'none';
}
