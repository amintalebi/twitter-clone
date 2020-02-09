from django.contrib.auth.models import User
from django.db import models


class Channel(models.Model):
    name = models.CharField(max_length=75)
    creator = models.ForeignKey(User, on_delete=models.CASCADE, related_name='channel_creator')
    created_at = models.DateTimeField(auto_now_add=True)
    description = models.TextField(max_length=300, blank=True, null=True)
    rules = models.TextField(max_length=500, blank=True, null=True)

    def __str__(self):
        return str(self.id) + ': ' + self.name


class ChannelAdmin(models.Model):
    channel = models.ForeignKey(Channel, on_delete=models.CASCADE)
    admin = models.ForeignKey(User, on_delete=models.CASCADE)
    access_level = models.PositiveSmallIntegerField(default=1)

    # 4 Channel Creator: Basically can do everything
    # 3 Add/Del Member & Add/Del Admin
    # 2 Add/Del Member & Publish Message
    # 1 Add Member
    # -1 Not Admin
    class Meta:
        unique_together = ('channel', 'admin',)

    def __str__(self):
        return str(self.channel.name) + " " + str(self.admin.username) + " " + str(self.access_level)
