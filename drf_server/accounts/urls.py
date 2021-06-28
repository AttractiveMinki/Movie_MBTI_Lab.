from django.urls import path
from . import views

from rest_framework_jwt.views import obtain_jwt_token

app_name = 'accounts'

urlpatterns = [
    path('signup/', views.signup, name='signup'),
    path('api-token-auth/', obtain_jwt_token),
    path('get_username/', views.username, name='username'),
    path('get_is_staff/', views.getstaff, name='getstaff'),
]