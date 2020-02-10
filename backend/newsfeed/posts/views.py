from django.db.models import Q
from rest_framework import generics
from rest_framework import permissions
from rest_framework import response
from channels.models import ChannelAdmin
from posts.models import *
from accounts.models import Following
from posts.serializers import *

from django.utils.decorators import method_decorator
from django.views.decorators.cache import cache_page


class FollowingPostsView(generics.ListAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = PostSerializer

    # @method_decorator(cache_page(60))
    def get_queryset(self):
        followings_ids = Following.objects. \
            filter(user=self.request.user).values_list('following_id', flat=True). \
            distinct()

        return Post.objects.filter(creator_id__in=followings_ids)


class HotPostsView(generics.ListAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = PostSerializer

    # @method_decorator(cache_page(60))
    def get_queryset(self):
        return Post.objects.order_by('up_vote_count')


class ContributedPostsView(generics.ListAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = PostSerializer

    # @method_decorator(cache_page(60))
    def get_queryset(self):
        parent_ids = Post.objects.filter(creator_id=self.request.user.id). \
            filter(parent__isnull=False). \
            values_list('parent_id', flat=True).distinct()
        return Post.objects.filter(id__in=parent_ids)


class PostDetailView(generics.RetrieveAPIView):
    serializer_class = PostDetailSerializer

    # @method_decorator(cache_page(60))
    def get_queryset(self):
        return Post.objects.all()


class PostCreateView(generics.CreateAPIView):
    serializer_class = PostCreateSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            channel_id = request.data['channel']
            user_id = request.user.id
            access_level = safe_get_access_level(channel_id, user_id)
            if int(request.data['creator']) != int(request.user.id):
                return response.Response(status=403, data="invalid creator")
            if access_level < 2:
                return response.Response(status=403, data="invalid access level")
        return super().post(request, *args, **kwargs)


def safe_get_access_level(channel_id, user_id):
    try:
        ch = ChannelAdmin.objects.get(Q(channel_id=channel_id) & Q(admin_id=user_id))
    except ChannelAdmin.DoesNotExist:
        return -1
    return ch.access_level


class PostUpdateView(generics.RetrieveUpdateAPIView):
    serializer_class = PostUpdateSerializer
    permission_classes = (permissions.IsAuthenticated,)

    # @method_decorator(cache_page(60))
    def get_queryset(self):
        return Post.objects.filter(creator=self.request.user)


class PostMediaCreateView(generics.CreateAPIView):
    serializer_class = PostMediaSerializer
    permission_classes = (permissions.IsAuthenticated,)


class PostMediaUpdateView(generics.RetrieveUpdateAPIView):
    serializer_class = PostMediaSerializer
    permission_classes = (permissions.IsAuthenticated,)

    # @method_decorator(cache_page(60))
    def get_queryset(self):
        return PostMedia.objects.all()


class ActionOnPostCreateView(generics.CreateAPIView):
    serializer_class = ActionOnPostSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            pk = serializer.data['post']
            post = Post.objects.get(pk=pk)
            if serializer.data['action'] == "UP_VOTE":
                post.up_vote_count += 1
            elif serializer.data['action'] == 'DOWN_VOTE':
                post.down_vote_count += 1
            post.save()
        return super().create(request, *args, **kwargs)


class ActionOnPostDetailView(generics.RetrieveAPIView):
    queryset = ActionOnPost.objects.all()
    serializer_class = ActionOnPostSerializer
