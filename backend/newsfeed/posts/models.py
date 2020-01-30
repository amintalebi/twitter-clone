from django.contrib.auth.models import User
from django.db import models

from channels.models import Channel


class Post(models.Model):
    creator = models.ForeignKey(User, on_delete=models.CASCADE, related_name='post_creator')
    bookmarked = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    likes = models.ForeignKey(User, models.CASCADE, related_name='post_likes')
    shared = models.ForeignKey(User, models.CASCADE, related_name='post_shares')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    shared_count = models.IntegerField(blank=True, default=0)
    liked_count = models.IntegerField(blank=True, default=0)
    parent = models.ForeignKey('self', null=True, blank=True, db_index=True, on_delete=models.CASCADE)
    channel = models.ForeignKey(Channel, on_delete=models.CASCADE, related_name='post_channel')

    def get_replies(self):
        replies = Post.objects.filter(parent=self.id)
        for reply in replies:
            replies |= reply.getReplies()
        return replies
