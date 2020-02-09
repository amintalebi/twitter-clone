from django.urls import path
from .views import *

urlpatterns = [
    path('current_user/', current_user),
    path('signup/', SignUp.as_view()),
    path('<int:pk>', ProfileView.as_view()),
    path('follow', FollowView.as_view()),
    path('unfollow/<int:pk>', UnfollowView.as_view()),
    path('update/<int:pk>', ProfileUpdateView.as_view()),
    path('following-list', FollowingList.as_view())
]
