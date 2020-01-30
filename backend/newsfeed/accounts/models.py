from django.contrib.auth.models import User
from django.db import models


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    followers = models.ForeignKey(User, on_delete=models.CASCADE, related_name='followers')
    bio = models.TextField(max_length=100, blank=True)
    joined_at = models.DateTimeField(auto_now_add=True)
