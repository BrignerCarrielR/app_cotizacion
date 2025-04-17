function crear() {
    const contenido_html = `
                <div class="flex flex-col">
                    <label for="nombre" class="text-left font-semibold opacity-60">Nombre:</label>
                    <input class="border border-gray-200 rounded-lg py-1 px-2" type="text" name="nombre" id="nombre"
                        placeholder="Ej: Brigner">
                </div>
                <div class="flex flex-col">
                    <label for="apellido" class="text-left  font-semibold opacity-60">Apellido:</label>
                    <input class="border border-gray-200 rounded-lg py-1 px-2" type="text" name="apellido" id="apellido"
                        placeholder="Ej: Carriel">
                </div>
                <div class="flex flex-col">
                    <label for="correo" class="text-left  font-semibold opacity-60">Correo:</label>
                    <input class="border border-gray-200 rounded-lg py-1 px-2" type="text" name="correo" id="correo"
                        placeholder="Ej: bcarriel@ejemplo.com">
                </div>
                <div class="flex flex-col">
                    <label for="telefono" class="text-left  font-semibold opacity-60">Telefono:</label>
                    <input class="border border-gray-200 rounded-lg py-1 px-2" type="text" name="telefono" id="telefono"
                        placeholder="Ej: 0987654321">
                </div>
                <div class="flex flex-col">
                    <label for="telefono" class="text-left  font-semibold opacity-60">Dirección:</label>
                    <input class="border border-gray-200 rounded-lg py-1 px-2" type="text" name="direccion" id="telefono"
                        placeholder="Ej: Vinces - Palizada">
                </div>
            `
    crear_base(contenido_html, 'Clientes')
}

function eliminar(id) {
    fetch(`/eliminar_cliente/${id}/ `, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        // body: JSON.stringify({
        //     nombre: 'Juan',
        //     apellido: 'Perez',
        //     correo: 'juan.perez@example.com'
        // })
    }).then(response => {
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }
        return response.json();
    }).then(data => {
        console.log(data.mensaje)
        Swal.fire({
            title: 'Aviso!',
            html: data.mensaje,
            icon: 'info',
            confirmButtonText: 'OK',
        }).then((result) => {
            if (result.isConfirmed) {
                // Acción a realizar cuando se hace clic en "OK"
                console.log('El usuario hizo clic en OK');
                // Aquí puedes agregar tu lógica, como redireccionar o ejecutar una función
                window.location.href = '/clientes/'
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                // Acción a realizar cuando se hace clic en "Cancelar"
                console.log('El usuario hizo clic en Cancelar');
            }
        });


    }).catch(error => {
        console.error('Hubo un problema con la solicitud:', error);
    });
}


function editar(id) {
    let cliente
    fetch(`/obtener_cliente/${id}/ `, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        // body: JSON.stringify({
        //     nombre: 'Juan',
        //     apellido: 'Perez',
        //     correo: 'juan.perez@example.com'
        // })
    }).then(response => {
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }
        return response.json();
    }).then(data => {
        console.log('Datos recibidos:', data.cliente);
        cliente = data.cliente
        const contenido_html = `
        <div class="flex flex-col">
            <label for="nombre" class="text-left font-semibold opacity-60">Nombre:</label>
            <input class="border border-gray-200 rounded-lg py-1 px-2" type="text" name="nombre" id="nombre"
                placeholder="Ej: Brigner" value="${cliente.nombre}">
            <input hidden class="border border-gray-200 rounded-lg py-1 px-2" type="text" name="id" id="id"
                placeholder="Ej: Brigner" value="${cliente.id}">
        </div>
        <div class="flex flex-col">
            <label for="apellido" class="text-left  font-semibold opacity-60">Apellido:</label>
            <input class="border border-gray-200 rounded-lg py-1 px-2" type="text" name="apellido" id="apellido"
                placeholder="Ej: Carriel"  value="${cliente.apellidos}">
        </div>
        <div class="flex flex-col">
            <label for="correo" class="text-left  font-semibold opacity-60">Correo:</label>
            <input class="border border-gray-200 rounded-lg py-1 px-2" type="text" name="correo" id="correo"
                placeholder="Ej: bcarriel@ejemplo.com"  value="${cliente.correo}">
        </div>
        <div class="flex flex-col">
            <label for="telefono" class="text-left  font-semibold opacity-60">Telefono:</label>
            <input class="border border-gray-200 rounded-lg py-1 px-2" type="text" name="telefono" id="telefono"
                placeholder="Ej: 0987654321"  value="${cliente.telefono}">
        </div>
        <div class="flex flex-col">
            <label for="telefono" class="text-left  font-semibold opacity-60">Dirección:</label>
            <input class="border border-gray-200 rounded-lg py-1 px-2" type="text" name="direccion" id="direccion"
                placeholder="Ej: Vinces - Palizada"  value="${cliente.direccion}">
        </div>
    `
        editar_base(contenido_html, 'Clientes')
    }).catch(error => {
        console.error('Hubo un problema con la solicitud:', error);
    });


}

