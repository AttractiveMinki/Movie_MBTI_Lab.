from rest_framework import routers
from accounts.viewsets import UserViewSet
from community.viewsets import ReviewViewSet, CommentViewSet, ReviewListViewSet
from movies.viewsets import MovieViewSet, ReviewViewSet, CommentViewSet, MovieListViewSet

router = routers.DefaultRouter()
router.register(r'accounts/user', UserViewSet)
router.register(r'community/review', ReviewViewSet)
router.register(r'community/comment', CommentViewSet)
router.register(r'community/reviewlist', ReviewListViewSet)
router.register(r'movies/movie', MovieViewSet)
router.register(r'movies/review', ReviewViewSet)
router.register(r'movies/comment', CommentViewSet)
router.register(r'movies/movielist', MovieListViewSet)
