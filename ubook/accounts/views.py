from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.db import IntegrityError
from django.http import HttpResponse


def register(request):

    # if the page is being loaded via GET, load the registration form
    if request.method == "GET":
        return render(request, "accounts/register.html")

    # if the page is being loaded via POST, a form has been submitted
    elif request.method == "POST":

        # grab fields off the form
        username = request.POST["username"]
        email = request.POST["email"]
        password = request.POST["password"]
        phone = request.POST["phone"]
        # here we get the value of the new attribute

        try:
            user = User.objects.create_user(username, email, password)
            user.profile.phone = phone
            # assign the attribute value to the user.profile.attribute
            user.save()
        except IntegrityError as e:
            # try again
            return render(request, "accounts/register.html", {"message": "Error! Please try again."})

        return render(request, "registration/login.html", {"message": "Registration success! Please login."})
