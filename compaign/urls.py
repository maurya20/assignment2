from django.urls import path
# from rest_framework import views

from compaign.views import get_compaigns


urlpatterns = [
    path('api/compaigns/',get_compaigns),
]