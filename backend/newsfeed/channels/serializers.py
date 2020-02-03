from rest_framework import serializers

from channels.models import Channel


class PostSerializer(serializers.ModelSerializer):

    class Meta:
        model = Channel
        fields = ['id', 'creator', 'created_at', 'description', 'rules', 'is_personal']


