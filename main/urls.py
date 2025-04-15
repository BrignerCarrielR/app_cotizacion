from django.contrib import admin
from django.urls import path, include
from app.views import index, clientes

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index, name='inicio'),
    path('clientes/', clientes, name='clientes'),

    path("accounts/", include("django.contrib.auth.urls")),
    path("__reload__/", include("django_browser_reload.urls")),
]
