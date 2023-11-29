
        
        /*const nombre = document.querySelector("nombre");
        const edad = document.querySelector("edad");
        const dni = document.querySelector("dni");
        const posicion = document.querySelector("posicion");
        const telefono = document.querySelector("telefono")
        const btnEnviar = document.querySelector("btnEnviar");*/

        const datoNombre = document.querySelector('#datoNombre');
        const datoEdad = document.querySelector('#datoEdad');
        const datoDni = document.querySelector('#datoDni');
        const datoPosicion = document.querySelector('#datoPosicion');
        const datoTelefono = document.querySelector('#datoTelefono');
        const btnEnviar = document.querySelector('#btnEnviar');

var mensaje; 

function enviar() {
    mensaje = `https://api.whatsapp.com/send?phone=543757514199&text=
    ${datoNombre.value}%20${datoEdad.value}%20${datoDni.value}%20${datoPosicion.value}%20${datoTelefono.value}`;
    btnEnviar.href = mensaje;
}
