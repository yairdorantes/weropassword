from django.urls import path

from .views import UsersView
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path("user", csrf_exempt(UsersView.as_view()), name="user"),
]
