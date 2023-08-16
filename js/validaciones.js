
function ValidarEstudiantes() {
    let identificacion  = document.getElementById('identificacion').value
    let nombres         = document.getElementById('nombres').value
    let apellidos       = document.getElementById('apellidos').value
    let email           = document.getElementById('email').value
    let telefono        = document.getElementById('telefono').value
    let direccion       = document.getElementById('direccion').value
    let municipio       = document.getElementById('municipio').value
    let departamento    = document.getElementById('departamento').value

    let mensajes=''
    
    if(telefono=='')         mensajes +='<li>Debes agregar un numero de telefono</li>'
    if(email=='')            mensajes +='<li>Debes agregar un correo electronico</li>'
    if(nombres=='')          mensajes +='<li>Debes agregar tus nombres</li>'
    if(apellidos=='')        mensajes +='<li>Debes agregar tus apellidos</li>'
    if(identificacion=='')   mensajes +='<li>Debes agregar una identificacion</li>'
    if(direccion=='')        mensajes +='<li>Debes agregar una direccion</li>'
    if(municipio=='')        mensajes +='<li>Debes agregar una municipio</li>'
    if(departamento=='')     mensajes +='<li>Debes agregar una departamento</li>'

    if(mensajes!=''){
        document.getElementById('mensaje').innerHTML = `<div class='alert alert-danger' role='alert'> ${mensajes} </div>`
    }else{
        document.forestudiantes.submit()
    }
    
}

function ValidarMaterias() {
    let nombre       = document.getElementById('nombre').value
    let docente      = document.getElementById('docente').value
    let area         = document.getElementById('area').value
    let promedio     = document.getElementById('promedio').value
    let mensajes=''
    
    if(nombre=='')   mensajes +='<li>Debes ingresar nombre de la materia</li>'
    if(docente=='')   mensajes +='<li>Debes ingresar nombre de la docente</li>'
    if(area=='')   mensajes +='<li>Debes ingresar nombre de la area asignada</li>'
    if(promedio=='')   mensajes +='<li>Debes ingresar nombre de la promedio</li>'
    if(mensajes!=''){
        document.getElementById('mensaje').innerHTML = `<div class='alert alert-danger' role='alert'> ${mensajes} </div>`
    }else{
        document.formateria.submit()
    }
    
}