from rest_framework import serializers

from channels.models import Channel, ChannelAdmin


class ChannelSerializer(serializers.ModelSerializer):

    class Meta:
        model = Channel
        fields = ['id', 'creator', 'created_at', 'description', 'rules', 'is_personal']


class ChannelAdminSerializer(serializers.ModelSerializer):

    class Meta:
        model = ChannelAdmin
        fields = '__all__'
