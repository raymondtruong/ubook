from django.contrib import admin
from accounts.models import *


# Register your models here.

# Define the admin class
class ProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'phone') #add to this any other attributes we'd like to display

# Register the admin class with the associated model
admin.site.register(Profile, ProfileAdmin)
