from rest_framework import generics

from events.serializers import EventSerializer
from events.models import Event


class EventDetailView(generics.RetrieveAPIView):
    serializer_class = EventSerializer
    lookup_field = 'channel__id'
    queryset = Event.objects.all()
