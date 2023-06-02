# Create your views here.
from django.views import View
import json
from django.http import HttpResponse
from .models import Users


class UsersView(View):
    def post(self, request):
        jd = json.loads(request.body)
        Users.objects.create(**jd)
        return HttpResponse("oki", 200)
