from rest_framework import serializers

from posts.models import Post, PostMedia, ActionOnPost


class PostSerializer(serializers.ModelSerializer):
    channel = serializers.StringRelatedField()
    creator = serializers.StringRelatedField()
    media = serializers.SerializerMethodField('get_media')

    def get_media(self, post):
        return post.get_media()

    class Meta:
        model = Post
        fields = ['id', 'creator', 'content', 'channel',
                  'up_vote_count', 'down_vote_count', 'created_at', 'updated_at', 'media']


class PostDetailSerializer(serializers.ModelSerializer):
    channel = serializers.StringRelatedField()
    creator = serializers.StringRelatedField()
    replies = serializers.SerializerMethodField('get_replies')
    media = serializers.SerializerMethodField('get_media')

    def get_replies(self, post):
        return post.get_replies()

    def get_media(self, post):
        return post.get_media()

    class Meta:
        model = Post
        fields = ['id', 'creator', 'content', 'channel',
                  'up_vote_count', 'down_vote_count', 'created_at', 'updated_at', 'replies', 'media']


class PostCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('creator', 'content', 'parent', 'channel')


class PostMediaSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostMedia
        fields = '__all__'


class ActionOnPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = ActionOnPost
        fields = '__all__'


class PostUpdateSerializer(serializers.ModelSerializer):
    media = serializers.SerializerMethodField('get_media')

    def get_media(self, post):
        return post.get_media()

    class Meta:
        model = Post
        fields = ['content', 'media', ]
