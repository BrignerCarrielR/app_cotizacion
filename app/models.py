from django.db import models

# Create your models here.
class Cliente(models.Model):
    nombre = models.CharField(max_length=255) 
    apellidos = models.CharField(max_length=255)
    correo = models.EmailField(unique= True)  
    telefono = models.CharField(max_length=15, unique= True)  
    direccion = models.TextField() 

    def __str__(self):
        return f"{self.nombre} {self.apellidos}" 