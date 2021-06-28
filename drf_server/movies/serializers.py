from rest_framework import serializers
from .models import Movie, Comment, Review

class MovieListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Movie
        fields = ('id', 'title', 'poster_path', 'youtube_link')

# pjt08 참고
class CommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = ('id', 'content',)
        read_only_fields = ('review',)


class ReviewSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True, read_only=True)
    comment_count = serializers.IntegerField(source='comments.count', read_only=True)

    class Meta:
        model = Review
        fields = ('id', 'title', 'content', 'comments', 'comment_count', 'username', 'rank')
        read_only_fields = ('movie',)


class MovieSerializer(serializers.ModelSerializer):
    reviews = ReviewSerializer(many=True, read_only=True)
    review_count = serializers.IntegerField(source='reviews.count', read_only=True)

    class Meta:
        model = Movie
        fields = ('id', 'title', 'popularity', 'rank', 'release_date', 'vote_count',
         'vote_average', 'overview', 'poster_path', 'youtube_link',
          'reviews', 'review_count')
        