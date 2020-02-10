from django.utils.decorators import method_decorator
from django.views.decorators.cache import cache_page
from rest_framework import generics

from events.serializers import EventSerializer
from events.models import Event


class EventDetailView(generics.RetrieveAPIView):
    serializer_class = EventSerializer
    lookup_field = 'channel__id'
    queryset = Event.objects.all()

    # @method_decorator(cache_page(60))
    def get_queryset(self):
        return Event.objects.all()