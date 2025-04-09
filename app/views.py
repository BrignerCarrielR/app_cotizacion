from django.shortcuts import render, redirect
from django.http import HttpResponse
# Create your views here.

import datetime


def current_datetime(request):
    try:
        now = datetime.datetime.now()
        listado = [
            {'nombre': 'Juan', 'apellido': 'Pérez', 'edad': 30},
            {'nombre': 'Ana', 'apellido': 'Gómez', 'edad': 25},
            {'nombre': 'Luis', 'apellido': 'Martínez', 'edad': 40},
        ]
        contexto = {
            'clientes': listado,
        }
        return render(request, 'index.html', contexto)
    except Exception as e:
        print(e)
        return redirect('inicio')


def index(request):
    try:
        return render(request, 'base.html')
    except Exception as e:
        print(e)
        return redirect('prueba')
