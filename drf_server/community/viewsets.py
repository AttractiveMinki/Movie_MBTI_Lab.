from rest_framework import viewsets
from .models import Review, Comment
from .serializers import ReviewListSerializer, CommentSerializer, ReviewSerializer

class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

class ReviewListViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewListSerializer