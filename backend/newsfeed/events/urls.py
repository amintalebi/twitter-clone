from django.urls import path

from events.views import EventDetailView

urlpatterns = [
    path('<int:channel__id>', EventDetailView.as_view())
]
