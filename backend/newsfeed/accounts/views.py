from rest_framework import permissions, status, generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import *
from .serializers import *


@api_view(['GET'])
def current_user(request):
    """
    Determine the current user by their token, and return their data
    """

    serializer = UserSerializer(request.user)
    return Response(serializer.data)


class SignUp(generics.CreateAPIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = UserSignUpSerializer


class ProfileView(generics.RetrieveAPIView):
    serializer_class = ProfileReadSerializer
    queryset = Profile.objects.all()


class FollowView(generics.CreateAPIView):
    serializer_class = FollowSerializer


class UnfollowView(generics.RetrieveDestroyAPIView):
    serializer_class = FollowSerializer
    queryset = Following.objects.all()


class ProfileUpdateView(generics.RetrieveUpdateAPIView):
    serializer_class = ProfileUpdateSerializer
    queryset = Profile.objects.all()


class FollowingList(generics.ListAPIView):
    serializer_class = FollowSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get_queryset(self):
        return Following.objects.filter(user=self.request.user).distinct()


