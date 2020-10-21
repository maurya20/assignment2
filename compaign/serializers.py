from rest_framework import serializers
from .models import Compaignmodel



class CompaignSerializer(serializers.ModelSerializer):
    class Meta:
        model = Compaignmodel
        fields = "__all__"
