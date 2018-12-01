from django.shortcuts import render
from listings.models import *
from itertools import chain


def index(request):
    if request.user.is_authenticated:


        # combine individual listings and bundle listings
        listings = list(chain(IndividualListing.objects.all(), BundleListing.objects.all()))

        # if advanced search criteria is used:
        if request.method == "POST":

            # search name
            if request.POST.get("general_search_update"):
                # search bar contents
                search = request.POST.get("search-bar")

                # first filter textbook names
                individual_listings = IndividualListing.objects.all().filter(textbook__name__contains=search)
                bundle_listings_textname = BundleListing.objects.all().filter(textbooks__name__contains=search)

                # filter bundle names
                bundle_listings_name = BundleListing.objects.all().filter(title__contains=search)

                # filter authors
                individual_listings_author = IndividualListing.objects.all().filter(textbook__authors__contains=search)
                bundle_listings_author = BundleListing.objects.all().filter(textbooks__authors__contains=search)

                # gets rid of duplicates from different query searches
                unique_set = set(list(chain(individual_listings, bundle_listings_textname, bundle_listings_name, bundle_listings_textname, individual_listings_author, bundle_listings_author)))

                listings = list(unique_set)



            # price criteria
            elif request.POST.get("price_update"):
                start_price = request.POST.get("start-price")
                end_price = request.POST.get("end-price")


                # if only max price provided
                if start_price == "" and end_price != "":
                    individual_listings = IndividualListing.objects.all().filter(price__lte=end_price)
                    bundle_listings = BundleListing.objects.all().filter(price__lte=end_price)

                    # filtered list of listings
                    listings = list(chain(individual_listings, bundle_listings))

                # if only min price provided
                elif start_price != "" and end_price == "":
                    individual_listings = IndividualListing.objects.all().filter(price__gte=start_price)
                    bundle_listings = BundleListing.objects.all().filter(price__gte=start_price)

                    # filtered list of listings
                    listings = list(chain(individual_listings, bundle_listings))

                # filter prices of bundle and individual listings if both start and end price provided
                elif start_price != "" and end_price != "":
                    individual_listings = IndividualListing.objects.all().filter(price__gte=start_price).filter(price__lte=end_price)
                    bundle_listings = BundleListing.objects.all().filter(price__gte=start_price).filter(price__lte=end_price)

                    # filtered list of listings
                    listings = list(chain(individual_listings, bundle_listings))



            # course criteria
            elif request.POST.get("course_update"):
                course = request.POST.get("course-input")

                # filter courses of bundle and individual listings
                individual_listings = IndividualListing.objects.all().filter(textbook__courses__contains=course)
                bundle_listings = BundleListing.objects.all().filter(textbooks__courses__contains=course)
                listings = list(chain(individual_listings, bundle_listings))

            # condition criteria
            elif request.POST.get("condition_update"):
                condition = int(request.POST.get("condition-slider"))/2

                # filter condition of bundle and individual listings
                individual_listings = IndividualListing.objects.all().filter(textbook__condition__gte=condition)
                bundle_listings = BundleListing.objects.all().filter(textbooks__condition__gte=condition)
                listings = list(chain(individual_listings, bundle_listings))



        return render(request, "listings/listings.html", {"listings": listings})

    else:
        return render(request, "listings/index.html")


def profile(request):
    if request.method == "POST":
        if request.POST.get("submit"):
            new_email = request.POST.get("email")
            new_phone = request.POST.get("phone")

            request.user.email = new_email
            request.user.profile.phone = new_phone
            request.user.save()

    return render(request, "listings/profile.html")


def change_info(request):
    return render(request, "listings/change_info.html")

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

def create_textbook(title, author, course, cond, img, desc):
    return Textbook(name=title,
                     authors=author,
                     courses=course,
                     condition=cond,
                     description=desc,
                     photo=img)

def new_listing(request):
    if request.user.is_authenticated:
        if (request.method == "POST"):
            listing_title = request.POST.get("listing_title")
            listing_desc = request.POST.get("listing_desc")
            listing_price = float(request.POST.get("listing_price"))

            text1_title = request.POST.get("title1")
            text1_author = request.POST.get("author1")
            text1_course = request.POST.get("course1")
            text1_condition = float(request.POST.get("condition1")) / 2
            text1_image = request.POST.get("image1")
            text1_description = request.POST.get("description1")
            text1_textbook = create_textbook(text1_title, text1_author, text1_course, text1_condition,text1_image, text1_description)
            text1_textbook.save()

            i = 2
            text_title = request.POST.get("title" + str(i))
            texts_for_bundle = []
            if(text_title == None):
                l = IndividualListing(owner=request.user, textbook=text1_textbook, price=listing_price)
                l.save()
            else:
                while text_title != None:
                    text_title = request.POST.get("title" + str(i))
                    text_author = request.POST.get("author" + str(i))
                    text_course = request.POST.get("course" + str(i))
                    text_condition = float(request.POST.get("condition" + str(i))) / 2
                    text_image = request.POST.get("image" + str(i))
                    text_description = request.POST.get("description" + str(i))
                    text_textbook = create_textbook(text_title, text_author, text_course, text_condition,
                                                     text_image, text_description)
                    text_textbook.save()
                    texts_for_bundle.append(text_textbook)
                    i += 1
                    text_title = request.POST.get("title" + str(i))
                b = BundleListing(owner=request.user, title=listing_title, description=listing_desc,
                                  price=listing_price)
                b.save()
                print(b.textbooks)

                for t in texts_for_bundle:
                    b.textbooks.add(t)
                b.photo = text1_textbook.photo
                b.save()
                print(b.textbooks)

        return render(request, "listings/new_listing.html")
