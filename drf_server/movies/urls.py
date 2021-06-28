from django.urls import path
from . import views

app_name = 'movies'

urlpatterns = [
    path('', views.index, name='index'),
    path('updatedb/', views.updatedb, name='updatedb'),
    path('<int:movie_pk>/', views.detail, name='detail'),
    path('<int:movie_pk>/review/', views.review_create, name='review_create'),
    path('<int:movie_pk>/review/<int:review_pk>/', views.review_detail, name='review_detail'),
    path('<int:movie_pk>/review/<int:review_pk>/comment/', views.comment_create, name='comment_create'),
]
