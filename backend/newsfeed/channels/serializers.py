from rest_framework import serializers

from accounts.models import Following
from channels.models import Channel, ChannelAdmin


class ChannelSerializer(serializers.ModelSerializer):
    followers = serializers.SerializerMethodField('get_followers')
    creator = serializers.StringRelatedField()

    def get_followers(self, channel):
        return Following.objects.filter(following_id=channel.id).values('user')

    class Meta:
        model = Channel
        fields = ['id', 'creator', 'created_at', 'description', 'rules', 'followers']


class ChannelAdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChannelAdmin
        fields = '__all__'
