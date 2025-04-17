from django.contrib import admin
from django.urls import path, include
from app.views import index, clientes, obtener_cliente, eliminar_cliente

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index, name='inicio'),
    path('clientes/', clientes, name='clientes'),
    path('obtener_cliente/<int:id>/', obtener_cliente, name='obtener_cliente'),
    path('eliminar_cliente/<int:id>/', eliminar_cliente, name='eliminar_cliente'),

    path("accounts/", include("django.contrib.auth.urls")),
    path("__reload__/", include("django_browser_reload.urls")),
]
