from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import User


class Person(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    following = models.ManyToManyField(Channel)
    bio = models.TextField(max_length=100, blank=True)
    joined_at = models.DateTimeField(auto_now_add=True)
    birth_date = models.DateField(blank=True, null=True)
    name = models.CharField(blank=True)
    blocked = models.ManyToManyField("self", symmetrical=False)
    
    

class Channel(models.Model):
    creator = models.ForeignKey(Person, on_delete=models.CASCADE)
    admins = models.ManyToManyField(Person)
    created_at = models.DateTimeField(auto_now_add=True)
    description = models.TextField(max_length=300, blank=True, null=True)
    rules = models.TextField(max_length=300, blank=True, null=True)
    
    

class Post(models.Model):
    creator = models.ForeignKey(Person, on_delete=models.CASCADE)
    bookmarked = models.ManyToManyField(Person)
    number_of_times_reported = models.ForeignKey(Person, on_delete=models.CASCADE)
    likes = models.ManyToManyField(Person)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    pass


class SharedPost(models.Model):
    user = models.ForeignKey(Person, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    shared_at = models.DateTimeField(auto_now_add=True)


class ReportedPost(models.Model):
    kind_of_report = models.CharField(blank = True)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    user = models.ForeignKey(Person, on_delete=models.CASCADE)
    reported_at = models.DateTimeField(auto_now_add=True)
# Create your models here.
