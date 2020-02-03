from django.urls import path

from channels.views import *

urlpatterns = [
    path('<int:pk>', ChannelDetailView.as_view()),
    path('create', ChannelCreateView.as_view()),
    path('<int:pk>', ChannelAdminDetailView.as_view()),
    path('create', ChannelAdminCreateView.as_view())
]
