from compaign.models import Compaignmodel
from django.http import JsonResponse
from .serializers import CompaignSerializer
from rest_framework import generics




#for static data JsonResponse
def get_compaigns(request):
    data = [{"campaignName":"test_notification","status":"Draft","opens":"0","clicks":"0"},
            {"campaignName":"test_notification","status":"Draft","opens":"1","clicks":"1"},
            {"campaignName":"test_notification","status":"Draft","opens":"2","clicks":"2"},
            {"campaignName":"test_notification","status":"Draft","opens":"3","clicks":"3"},
            {"campaignName":"test_notification","status":"Draft","opens":"4","clicks":"4"},
            {"campaignName":"test_notification","status":"Draft","opens":"5","clicks":"5"},]

    return JsonResponse(data, safe=False)


# for data from database through model and serializer
class CompaignsList(generics.ListAPIView):
    permission_classes = []
    authentication_classes = []
    queryset = Compaignmodel.objects.all()
    serializer_class = CompaignSerializer