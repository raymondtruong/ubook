from django.db import models


class Textbook(models.Model):
    name = models.CharField(max_length=50)
    edition = models.CharField(max_length=30)
    authors = []
    condition = models.CharField(max_length=30)

    description = models.CharField(max_length=100)
    courses = []

    def get_full_name():
        pass

    def edit_fields(name, edition, authors, condition, description, courses):
        pass
