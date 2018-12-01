from django.urls import path
from . import views

urlpatterns = [
        path("", views.index, name="index"),
        path("change_info/", views.change_info, name="change_info"),
        path("profile/", views.profile, name="profile"),
        path("active_listings/", views.active_listings, name="active_listings"),
        path("inactive_listings/", views.inactive_listings, name="inactive_listings"),
        path("new_listing/", views.new_listing, name="new_listing"),


]
