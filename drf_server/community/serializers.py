from rest_framework import serializers
from .models import Review, Comment

class ReviewListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Review
        fields = ('id', 'title',)


class CommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        # fields = '__all__'
        fields = ('id', 'content', 'user', 'created_at', 'updated_at', 'username')
        read_only_fields = ('article',)

# Detail
class ReviewSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True, read_only=True)
    comment_count = serializers.IntegerField(source='comments.count', read_only=True)
    
    # 이렇게 오버라이드도 가능
    #content = serializers.CharField(read_only=True)
    class Meta:
        model = Review
        fields = ('id', 'title', 'content', 'created_at', 'updated_at', 'comments', 'comment_count', 'user', 'movie_title', 'username')
