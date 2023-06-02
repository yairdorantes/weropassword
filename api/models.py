from django.db import models


class Users(models.Model):
    username = models.CharField(max_length=300)
    email = models.EmailField()
    password = models.CharField(max_length=100)

    def __str__(self) -> str:
        return self.username
