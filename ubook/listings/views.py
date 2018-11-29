from django.shortcuts import render
from listings.models import *
from itertools import chain


def index(request):
    if request.user.is_authenticated:

        """
        # hard code textbook
        t = Textbook(name="Test Textbook, 1st edition",
                     authors="Author 1, Author 2",
                     courses="CSC301, CSC302",
                     condition="9.5",
                     description="This is a textbook.",
                     photo="https://banner2.kisspng.com/20180105/prq/book-clip-art-5a5019c8436fc6.28019198151519892027624341.jpg")
        t.save()

        # hard code individual listing
        l = IndividualListing(owner=request.user, textbook=t, price=133.37)
        l.save()

        # hard code bundle listing
        b = BundleListing(owner=request.user, title="Test Bundle ()", description="This is a bundle.", price=133.38)
        b.save()
        b.textbooks.add(t)
        b.photo = t.photo
        b.save()
        """

        # combine individual listings and bundle listings
        listings = list(chain(IndividualListing.objects.all(), BundleListing.objects.all()))

        # if advanced search criteria is used:
        if request.method == "POST":

            # price criteria
            if request.POST.get("price_update"):
                start_price = request.POST.get("start-price")
                end_price = request.POST.get("end-price")

                individual_listings = IndividualListing.objects.all().filter(price__gte=start_price).filter(price__lte=end_price)
                bundle_listings = BundleListing.objects.all().filter(price__gte=start_price).filter(price__lte=end_price)
                listings = list(chain(individual_listings, bundle_listings))

            # course criteria
            elif request.POST.get("course_update"):
                course = request.POST.get("course-input")

                # TODO

            # condition criteria
            elif request.POST.get("condition_update"):
                condition = int(request.POST.get("condition-slider"))/2

                individual_listings = IndividualListing.objects.all().filter(textbook__condition__gte=condition)
                bundle_listings = BundleListing.objects.all().filter(textbooks__condition__gte=condition)
                listings = list(chain(individual_listings, bundle_listings))



        return render(request, "listings/listings.html", {"listings": listings})

    else:
        return render(request, "listings/index.html")


def profile(request):
    return render(request, "listings/profile.html")

def set_is_sold_to_value(listing, sold_value):
    if ("Individual" in listing):
        for l in IndividualListing.objects.all():
            if str(l) == listing:
                l.is_sold = sold_value
                l.save()
    else:
        for l in BundleListing.objects.all():
            if str(l) == listing:
                l.is_sold = sold_value
                l.save()

def remove_listing(listing):
    if ("Individual" in listing):
        for l in IndividualListing.objects.all():
            if str(l) == listing:
                l.delete()
    else:
        for l in BundleListing.objects.all():
            if str(l) == listing:
                l.delete()

def active_listings(request):
    if request.user.is_authenticated:
        # If we are requested to mark a listing as sold, set it as sold
        if (request.method == "POST"):
            if (request.POST.get("mark_as_sold")):
                listing = request.POST.get("listing_to_mark")
                set_is_sold_to_value(listing, True)
            if (request.POST.get("remove")):
                listing = request.POST.get("listing_to_remove")
                remove_listing(listing)

        individual_listings = IndividualListing.objects.all().filter(owner=request.user).filter(is_sold=False)
        bundle_listings = BundleListing.objects.all().filter(owner=request.user).filter(is_sold=False)

        # return all active listings owned by the currently authenticated user
        listings = list(chain(individual_listings, bundle_listings))
        return render(request, "listings/active_listings.html", {"listings": listings})
    else:
        return render(request, "listings/index.html")



def inactive_listings(request):
    if request.user.is_authenticated:
        if (request.method == "POST"):
            if (request.POST.get("reactivate")):
                listing = request.POST.get("listing_to_reactivate")
                set_is_sold_to_value(listing, False)
            if (request.POST.get("remove")):
                listing = request.POST.get("listing_to_remove")
                remove_listing(listing)

        individual_listings = IndividualListing.objects.all().filter(owner=request.user).filter(is_sold=True)
        bundle_listings = BundleListing.objects.all().filter(owner=request.user).filter(is_sold=True)

        # return all inactive listings owned by the currently authenticated user
        listings = list(chain(individual_listings, bundle_listings))
        return render(request, "listings/inactive_listings.html", {"listings": listings})

    else:
        return render(request, "listings/index.html")


def new_listing(request):
    return render(request, "listings/new_listing.html")
