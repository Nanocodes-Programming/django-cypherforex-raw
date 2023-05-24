from . import views
from django.urls import path

urlpatterns = [
    path('mentorshipprogram/', views.mentorshipview.as_view(), name='my-metoring'),
    path('ebook/', views.Ebookseriview.as_view(), name='my-ebook'),
    path('blog/', views.Blogseriview.as_view(), name='my-blog'),
    path('testimony/', views.Testimonyview.as_view(), name='my-testimony'),
    path('seminar/', views.Seminarview.as_view(), name='my-seminar'),
    path('signals/', views.Signalsview.as_view(), name='my-signals'),
    path('videos/', views.Videosview.as_view(), name='my-videos'),
    path('website/', views.websiteview.as_view(), name='my-website'),
    
]