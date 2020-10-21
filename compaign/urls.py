from django.urls import path
from rest_framework import views

from compaign.views import get_compaigns,CompaignsList


urlpatterns = [
    path('api/compaigns/',get_compaigns),
    path('api/getCampaignList/',CompaignsList.as_view()),
]