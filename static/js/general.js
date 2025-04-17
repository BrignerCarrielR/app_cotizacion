console.log('Estas dentro de general.js')

document.addEventListener('DOMContentLoaded', function () {
    let mensaje = document.getElementById('id_mensaje')

    if (mensaje) {
        mostrar_alertas(mensaje.value)
    }
});


function mostrar_alertas(mensaje) {
    let contenido = mensaje
    Swal.fire({
        title: 'Aviso!',
        html: contenido,
        icon: 'warning',
        confirmButtonText: 'OK',
    })
}

// function eliminar_cliente(nombre) {
//     let contenido = `Deseas eliminar al cliente ${nombre}?`
//     Swal.fire({
//         title: 'Aviso!',
//         html: contenido,
//         icon: 'info',
//         confirmButtonText: 'Si',
//         cancelButtonText: 'No', // Cambia aquí el texto
//         showCancelButton: true,
//     })
// }

function editar_cliente() {
    console.log('Estas dentro')
    const contenido = `
    <form id="crear_cliente_form" method="POST" enctype="multipart/form-data">
                    <div class="flex flex-col space-y-4">
                        <div class="flex flex-col">
                            <label for="nombre" class="text-left font-semibold opacity-60">Nombre:</label>
                            <input class="border border-gray-200 rounded-lg py-1 px-2" type="text" name="nombre" id="nombre"
                                placeholder="Ej: PROMO10">
                        </div>
                        <div class="flex flex-col">
                            <label for="apellido" class="text-left  font-semibold opacity-60">Apellido:</label>
                            <input class="border border-gray-200 rounded-lg py-1 px-2" type="text" name="apellido" id="apellido"
                                placeholder="Ej: PROMO10">
                        </div>
                        <div class="flex flex-col">
                            <label for="correo" class="text-left  font-semibold opacity-60">Correo:</label>
                            <input class="border border-gray-200 rounded-lg py-1 px-2" type="text" name="correo" id="correo"
                                placeholder="Ej: PROMO10">
                        </div>
                        <div class="flex flex-col">
                            <label for="telefono" class="text-left  font-semibold opacity-60">Telefono:</label>
                            <input class="border border-gray-200 rounded-lg py-1 px-2" type="text" name="telefono" id="telefono"
                                placeholder="Ej: 0987654321">
                        </div>
                    </div>
                </form>
`;
    Swal.fire({
        title: '<strong>Formulario</strong>',
        html: contenido,
        confirmButtonText: 'Guardar',
        cancelButtonText: 'Cancelar', // Cambia aquí el texto
        showCancelButton: true, // Asegúrate de activar el botón cancelar
    });
}