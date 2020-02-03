from django.contrib import admin
from posts.models import Post, PostMedia, ActionOnPost
# Register your models here.
admin.site.register(Post)
admin.site.register(PostMedia)
admin.site.register(ActionOnPost)
