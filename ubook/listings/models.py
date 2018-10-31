from django.db import models
from django.conf import settings
from datetime import date


class Textbook(models.Model):
    name = models.CharField(max_length=50)
    edition = models.IntegerField()

    # only allows multiples of 0.5 from 0.0 to 10.0
    condition = models.FloatField(choices=[(i/2, i/2) for i in range(0, 21, 1)])
    description = models.CharField(max_length=500)

    authors = models.CharField(max_length=100)  # change this to an array
    courses = models.CharField(max_length=100)  # change this to an array

    """
    def edit_fields(name, edition, authors, condition, description, courses):
        pass
    """


class Listing(models.Model):
    title = models.CharField(max_length=50)
    price = models.FloatField()
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    date_posted = models.DateField(default=date.today)

    is_sold = models.BooleanField(default=False)
    is_bundle = models.BooleanField(default=False)

    textbooks = models.ManyToManyField(Textbook)
    photo = models.CharField(max_length=100)  # static URL for now, change this

    """
    def mark_as_sold():
        this.is_sold = True

    def upload_photo(photo):
        pass

    def edit_price():
        pass
    """
