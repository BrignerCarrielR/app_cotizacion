from django.shortcuts import render, redirect
from django.http import HttpResponse
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
            
            nuevo_cliente = Cliente()
            nuevo_cliente.nombre = nombre
            nuevo_cliente.apellidos = apellido
            nuevo_cliente.correo = correo
            nuevo_cliente.telefono = telefono
            nuevo_cliente.direccion = direccion
            nuevo_cliente.save()
            
            
            return HttpResponse(f'El registro con el nombre{nuevo_cliente.nombre}, fue registrado con exito.')
            
        return render(request, 'clientes/listado_clientes.html', contexto)
    except Exception as e:
        print(e)
        return redirect('inicio')

