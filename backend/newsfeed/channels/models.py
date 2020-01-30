from django.contrib.auth.models import User
from django.db import models


class Channel(models.Model):
    name = models.CharField(max_length=75)
    creator = models.ForeignKey(User, on_delete=models.CASCADE, related_name='channel_creator')
    created_at = models.DateTimeField(auto_now_add=True)
    description = models.TextField(max_length=300, blank=True, null=True)
    rules = models.TextField(max_length=500, blank=True, null=True)
    is_personal = models.BooleanField()

    def __str__(self):
        return str(self.id) + ' ' + self.name


class ChannelAdmin(models.Model):
    channel = models.ForeignKey(Channel, on_delete=models.CASCADE)
    admin = models.ForeignKey(User, on_delete=models.CASCADE)
