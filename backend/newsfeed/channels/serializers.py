from rest_framework import serializers

from accounts.models import Following
from channels.models import Channel, ChannelAdmin
from posts.models import Post


class ChannelReadSerializer(serializers.ModelSerializer):
    admins = serializers.SerializerMethodField('get_admins')
    followers = serializers.SerializerMethodField('get_followers')
    creator = serializers.StringRelatedField()
    posts = serializers.SerializerMethodField('get_posts')

    def get_followers(self, channel):
        return Following.objects.filter(following_id=channel.id).values('user')

    def get_posts(self, channel):
        return Post.objects.filter(channel_id=channel.id).values()

    def get_admins(self, channel):
        return ChannelAdmin.objects.filter(channel_id=channel.id).values('admin', 'access_level')

    class Meta:
        model = Channel
        fields = ['id', 'name', 'creator', 'created_at', 'description', 'rules', 'admins', 'followers', 'posts']


class ChannelCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Channel
        fields = ['name', 'creator', 'description', 'rules', ]


class ChannelAdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChannelAdmin
        fields = '__all__'
