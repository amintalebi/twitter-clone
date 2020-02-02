from rest_framework import generics
from rest_framework import permissions

from posts.models import Post
from accounts.models import Following


class FollowingPostsView(generics.ListAPIView):
    permission_classes = (permissions.IsAuthenticated,)

    def get_queryset(self):
        followings_ids = Following.objects. \
            filter(user=self.request.user).values_list('following_id', flat=True). \
            distinct()

        return Post.objects.filter(creator_id__in=followings_ids)
