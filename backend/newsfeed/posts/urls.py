from django.urls import path
from posts.views import *

urlpatterns = [
    path('following-posts', FollowingPostsView.as_view()),
    path('<int:pk>', PostDetailView.as_view()),
    path('create', PostCreateView.as_view()),
    path('pm/<int:pk>', PostMediaUpdateView.as_view()),
    path('pm/create', PostMediaCreateView.as_view()),
    path('action', ActionOnPostCreateView.as_view()),
    path('actions/<int:pk>', ActionOnPostDetailView.as_view()),
    path('<int:pk>/update', PostUpdateView.as_view())
]




