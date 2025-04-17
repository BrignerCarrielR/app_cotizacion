from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
from django.contrib.auth.decorators import login_required
from app.models import Cliente
# Create your views here.

import datetime

@login_required
def index(request):
    try:
        clientes = Cliente.objects.all().count()
        contexto ={
            'modulo': 'Dashboard',
            'clientes': clientes,
            'productos': 4,
            'cotizaciones':10,
            'ingresos':100.24
        }
        return render(request, 'index.html', contexto)
    except Exception as e:
        print(e)
        return redirect('inicio')
    
@login_required
def clientes(request):
    try:
        listado_clientes = Cliente.objects.all()
        contexto = {
            'modulo': 'Clientes',
            'listado': listado_clientes
        }
        
        if request.method == 'POST':
            nombre = request.POST.get('nombre')
            apellido = request.POST.get('apellido')
            correo = request.POST.get('correo')
            telefono = request.POST.get('telefono')
            direccion = request.POST.get('direccion')

            if not nombre or not apellido or not correo or not telefono or not direccion: 
                contexto ['mensaje'] = 'Ingresa todos los valores sin redundacia de codigo...'
                return render(request, 'clientes/listado_clientes.html', contexto)
            
            id = request.POST.get('id', None)
            try:
                objeto_cliente = Cliente.objects.get(id=id)
                # Actualiza los datos si el cliente existe
                objeto_cliente.nombre = nombre
                objeto_cliente.apellidos = apellido
                objeto_cliente.correo = correo
                objeto_cliente.telefono = telefono
                objeto_cliente.direccion = direccion
                objeto_cliente.save()
            except Cliente.DoesNotExist:
                # Crea un nuevo cliente si no existe
                print('NO existe el cliente en base')
                nuevo_cliente = Cliente()
                nuevo_cliente.nombre = nombre
                nuevo_cliente.apellidos = apellido
                nuevo_cliente.correo = correo
                nuevo_cliente.telefono = telefono
                nuevo_cliente.direccion = direccion
                nuevo_cliente.save()

            
            
            return redirect('clientes')
            
        return render(request, 'clientes/listado_clientes.html', contexto)
    except Exception as e:
        print(e)
        return redirect('inicio')
    
def obtener_cliente(request, id):
    try:
        print(f'ID recibido: {id}')
        cliente = Cliente.objects.get(id = id)
        print(cliente)

        cliente_serr = {
            'id': cliente.id,
            'nombre': cliente.nombre,
            'apellidos': cliente.apellidos,
            'correo': cliente.correo,
            'telefono': cliente.telefono,
            'direccion': cliente.direccion,
        }
        return JsonResponse({'mensaje': 'Recibido', 'cliente': cliente_serr})
    except Exception as e:
        print(f'Error: {e}')
        return JsonResponse({'mensaje': f'Error: {str(e)}'})


def eliminar_cliente(request, id):
    try:
        print(f'ID recibido: {id}')
        cliente = Cliente.objects.get(id = id)
        print(cliente)
        cliente.delete()
        return JsonResponse({'mensaje': f'El cliente {cliente.nombre} se ha eliminado con exito'})
    except Exception as e:
        print(f'Error: {e}')
        return JsonResponse({'mensaje': f'Error: {str(e)}'})
