from rest_framework import serializers

from posts.models import Post


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['id', 'content', 'shared_count', 'liked_count', 'created_at', 'updated_at', 'channel']
