from django.db import models
from django.conf import settings
from datetime import date


class Textbook(models.Model):
    name = models.CharField(max_length=50)          # including edition
    authors = models.CharField(max_length=200)      # just a string, we can search through it
    courses = models.CharField(max_length=100)      # just a string, we can search through it

    # only allows multiples of 0.5 from 0.0 to 10.0
    condition = models.FloatField(choices=[(i/2, i/2) for i in range(0, 21, 1)])

    description = models.CharField(max_length=500)  # whatever you want
    photo = models.CharField(max_length=200)        # URL to image


class IndividualListing(models.Model):
    # metadata
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    date_posted = models.DateField(default=date.today)
    is_sold = models.BooleanField(default=False)
    is_bundle = models.BooleanField(default=False)

    price = models.FloatField()

    # Textbook object
    textbook = models.ForeignKey(Textbook, on_delete=models.CASCADE)

    # the following can be pulled from the Textbook object:
    # - listing title (the textbook's name)
    # - authors (the textbook's authors)
    # - courses (the textbook's courses)
    # - condition (the textbook's condition)
    # - description (the textbook's condition)
    # - photo (the textbook's photo)


class BundleListing(models.Model):
    # metadata
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    date_posted = models.DateField(default=date.today)
    is_sold = models.BooleanField(default=False)
    is_bundle = models.BooleanField(default=True)

    price = models.FloatField()

    # list of Textbook objects
    textbooks = models.ManyToManyField(Textbook)

    # the bundle has its own title and description
    title = models.CharField(max_length=50)         # then add "(__ textbooks)"
    description = models.CharField(max_length=500)
    photo = models.CharField(max_length=200)        # URL to image
