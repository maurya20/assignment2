from django.db import models

class Compaignmodel(models.Model):
    campaignName = models.CharField(max_length=200, null =True)
    status = models.CharField(max_length=200, null =True)
    opens = models.CharField(max_length=200, null =True)
    clicks = models.IntegerField(max_length=12, null =True)
    created_on = models.DateTimeField(auto_now=True)
    
    

    def __str__(self):
        return self.campaignName