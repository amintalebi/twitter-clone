from django.contrib.auth.models import User
from django.db import models

from channels.models import Channel


class Post(models.Model):
    creator = models.ForeignKey(User, on_delete=models.CASCADE, related_name='post_creator')
    content = models.CharField(max_length=250, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    up_vote_count = models.IntegerField(blank=True, default=0)
    down_vote_count = models.IntegerField(blank=True, default=0)
    parent = models.ForeignKey('self', null=True, blank=True, db_index=True, on_delete=models.CASCADE)
    channel = models.ForeignKey(Channel, on_delete=models.CASCADE, related_name='post_channel')

    def get_replies(self):
        replies = Post.objects.filter(parent=self.id)
        for reply in replies:
            replies |= reply.get_replies()
        return replies.values(
            'id',
            'content',
            'channel__name',
            'creator__username',
            'up_vote_count',
            'down_vote_count',
            'parent_id',
            'created_at',
            'updated_at',
            'channel_id'
        )

    def get_media(self):
        media = PostMedia.objects.filter(post=self)
        return media.values()

    def __str__(self):
        return str(self.id)


class PostMedia(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, null=True, blank=True)
    image = models.ImageField(upload_to='uploads/% Y/% m/% d/')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.id)


class ActionOnPost(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="like_user")
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name="like_post")

    UP_VOTE = 'UP_VOTE'
    DOWN_VOTE = 'DOWN_VOTE'
    ACTIONS = [
        (UP_VOTE, 'Up Vote'),
        (DOWN_VOTE, 'Down Vote'),
    ]
    action = models.CharField(max_length=10, choices=ACTIONS)
