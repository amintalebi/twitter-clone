from rest_framework import generics
from rest_framework import permissions

from posts.models import *
from accounts.models import Following
from posts.serializers import *


class FollowingPostsView(generics.ListAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = PostSerializer

    def get_queryset(self):
        followings_ids = Following.objects. \
            filter(user=self.request.user).values_list('following_id', flat=True). \
            distinct()

        return Post.objects.filter(creator_id__in=followings_ids)


class PostDetailView(generics.RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostDetailSerializer


class PostCreateView(generics.CreateAPIView):
    serializer_class = PostCreateSerializer


class PostUpdateView(generics.RetrieveUpdateAPIView):
    serializer_class = PostUpdateSerializer
    queryset = Post.objects.all()


class PostMediaCreateView(generics.CreateAPIView):
    serializer_class = PostMediaSerializer


class PostMediaUpdateView(generics.RetrieveUpdateAPIView):
    queryset = PostMedia.objects.all()
    serializer_class = PostMediaSerializer


class ActionOnPostCreateView(generics.CreateAPIView):
    serializer_class = ActionOnPostSerializer

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
