from django.urls import path
from . import views
urlpatterns = [
    path('', views.home, name = 'home'),
    path('projects.html', views.projects, name= 'projects'),
    path('contact.html', views.contact, name = 'contact_us'),
]