from django.contrib.auth.models import User
from django.db import models

from channels.models import Channel


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='user')
    bio = models.TextField(max_length=100, blank=True)
    joined_at = models.DateTimeField(auto_now_add=True)
    pic = models.ImageField(null=True, blank=True, upload_to='uploads/% Y/% m/% d/')

    def __str__(self):
        return self.user.username


class Following(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='following_user')
    following = models.ForeignKey(Channel, on_delete=models.CASCADE, related_name='following_channel')
