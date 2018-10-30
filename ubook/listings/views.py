from django.shortcuts import render
from listings.models import *


def index(request):
    return render(request, "listings/index.html")

def create(request):
    return render(request, "listings/create.html")

def modify(request):
    return render(request, "listings/modify.html")
