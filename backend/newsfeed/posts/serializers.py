from rest_framework import serializers

from posts.models import Post, PostMedia, ActionOnPost


class PostSerializer(serializers.ModelSerializer):
    channel = serializers.StringRelatedField()
    creator = serializers.StringRelatedField()

    class Meta:
        model = Post
        fields = ['id', 'creator', 'content', 'channel', 'up_vote_count', 'down_vote_count', 'created_at', 'updated_at']


class PostDetailSerializer(serializers.ModelSerializer):
    channel = serializers.StringRelatedField()
    creator = serializers.StringRelatedField()
    replies = serializers.SerializerMethodField('get_replies')

    def get_replies(self, post):
        return post.get_replies()

    class Meta:
        model = Post
        fields = ['id', 'creator', 'content', 'channel',
                  'up_vote_count', 'down_vote_count', 'created_at', 'updated_at', 'replies']


class PostCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'


class PostMediaSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostMedia
        fields = '__all__'


class ActionOnPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = ActionOnPost
        fields = '__all__'
