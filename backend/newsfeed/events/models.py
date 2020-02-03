from django.contrib.auth.models import User
from django.db import models

from channels.models import Channel


class Event(models.Model):
    FOLLOW = 'FOLLOW'
    MENTION = 'MENTION'
    TYPES = [
        (FOLLOW, 'Follow'),
        (MENTION, 'Mention'),
    ]
    channel = models.OneToOneField(Channel, on_delete=models.CASCADE)
    type = models.CharField(max_length=10, choices=TYPES)
    payload = models.CharField(max_length=300)

    def __str__(self):
        return str(self.payload)
