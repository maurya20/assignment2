from django.http import JsonResponse


def get_compaigns(request):
    data = [{"campaignName":"test_notification","status":"Draft","opens":"0","clicks":"0"}]

    return JsonResponse(data, safe=False)