from django.shortcuts import render
from listings.models import *

def index(request):
    if request.user.is_authenticated:
        """
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
        """
        return render(request, "listings/listings.html")
    else:
        return render(request, "listings/index.html")


def profile(request):
    return render(request, "listings/profile.html")


def active_listings(request):
    return render(request, "listings/active_listings.html")


def inactive_listings(request):
    return render(request, "listings/inactive_listings.html")


def new_listing(request):
    return render(request, "listings/new_listing.html")
