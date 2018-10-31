from django.shortcuts import render
from listings.models import *

def index(request):
    if request.user.is_authenticated:
        t = Textbook(name="Textbook", edition="1", condition="9.5",
                     description="This is a textbook.", authors="Author 1",
                     courses="CSC123")
        t.save()

        l = Listing(title="Listing", price="123.45", owner=request.user,
                    photo="https://banner2.kisspng.com/20180105/prq/book-clip-art-5a5019c8436fc6.28019198151519892027624341.jpg")

        l.save()
        l.textbooks.add(t)
        l.save()

        listings = Listing.objects.all()
        return render(request, "listings/index.html", {"listings": listings})
    else:
        return render(request, "listings/home.html")


def create(request):
    return render(request, "listings/create.html")

def modify(request):
    return render(request, "listings/modify.html")
