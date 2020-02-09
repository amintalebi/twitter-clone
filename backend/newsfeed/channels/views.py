from rest_framework import generics, permissions

from accounts.models import Following
from accounts.serializers import FollowSerializer
from channels.serializers import ChannelSerializer, ChannelAdminSerializer
from channels.models import Channel, ChannelAdmin


class ChannelCreateView(generics.CreateAPIView):
    serializer_class = ChannelSerializer


class ChannelDetailView(generics.RetrieveDestroyAPIView):
    serializer_class = ChannelSerializer
    queryset = Channel.objects.all()


class ChannelAdminCreateView(generics.CreateAPIView):
    serializer_class = ChannelAdminSerializer


class ChannelAdminDetailView(generics.RetrieveDestroyAPIView):
    serializer_class = ChannelAdminSerializer
    queryset = ChannelAdmin.objects.all()
