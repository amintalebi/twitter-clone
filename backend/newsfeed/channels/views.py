from rest_framework import generics, permissions, response

from channels.serializers import ChannelCreateSerializer, ChannelAdminSerializer, ChannelReadSerializer
from channels.models import Channel, ChannelAdmin


class ChannelCreateView(generics.CreateAPIView):
    serializer_class = ChannelCreateSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            if int(request.data['creator']) != int(request.user.id):
                return response.Response(status=403, data="invalid creator")
        return super().post(request, *args, **kwargs)


class ChannelDetailView(generics.RetrieveDestroyAPIView):
    serializer_class = ChannelReadSerializer
    queryset = Channel.objects.all()
    permission_classes = (permissions.IsAuthenticated,)


class ChannelAdminCreateView(generics.CreateAPIView):
    serializer_class = ChannelAdminSerializer
    permission_classes = (permissions.IsAuthenticated,)


class ChannelAdminDetailView(generics.RetrieveDestroyAPIView):
    serializer_class = ChannelAdminSerializer
    queryset = ChannelAdmin.objects.all()
    permission_classes = (permissions.IsAuthenticated,)
