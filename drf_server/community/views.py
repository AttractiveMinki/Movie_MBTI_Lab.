from django.shortcuts import get_list_or_404, get_object_or_404

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework_jwt.authentication import JSONWebTokenAuthentication

from django.views.decorators.http import require_POST
from .models import Review, Comment
from .serializers import ReviewListSerializer, CommentSerializer, ReviewSerializer

from django.contrib.auth import get_user_model


User = get_user_model()

# Create your views here.

# pjt09 참고
@api_view(['GET', 'POST'])
def index(request):
    if request.method == 'GET':
        reviews = get_list_or_404(Review)
        serializer = ReviewSerializer(reviews, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = ReviewSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)


# 얘만 03_vue_with_django 참고
@api_view(['GET', 'POST'])
# JWT를 활용한 인증을 할 때 JWT 자체를 검증한 인증 여부와 상관없이 JWT가 유효한지 여부만 파악
@authentication_classes([JSONWebTokenAuthentication])
# 인증이 되지 않은 상태로 요청이 오면
# "자격 인증 데이터"가 제공되지 않았습니다와 같은 메시지를 응답함
@permission_classes([IsAuthenticated])
def create(request):
    print('함수안까진들어왔쥬')
    print(request)
    if request.method == 'GET':
        serializer = ReviewSerializer(request.user.reviews, many=True) # 어떻게 입력 들어올껀지 봐야
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = ReviewSerializer(data=request.data.get('Review'))
        if serializer.is_valid(raise_exception=True):
            serializer.save(rank=request.data.get('Review').get('rank'), movie_title=request.data.get('Review').get('movie_title'))
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'DELETE', 'PUT'])
def detail(request, review_pk):
    review = get_object_or_404(Review, pk=review_pk)
    if request.method == 'GET':
        serializer = ReviewSerializer(review)
        return Response(serializer.data)
    elif request.method == 'DELETE':
        review.delete()
        data = {
            'delete': f'게시글 { review_pk }번이 정상적으로 삭제되었습니다.'
        }
        return Response(data, status=status.HTTP_204_NO_CONTENT)
    elif request.method == 'PUT':
        serializer = ReviewSerializer(review, data=request.data.get('items'))
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

# 1차 시도
# @ensure_csrf_cookie
@api_view(['POST'])
def create_comment(request, review_pk):
    if request.method == 'POST':
        review = get_object_or_404(Review, pk=review_pk)
        serializer = CommentSerializer(data=request.data.get('Comment'))
        if serializer.is_valid(raise_exception=True):
            serializer.save(review=review)
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['DELETE', 'PUT'])
def detail_comment(request, comment_pk):
    # review = get_object_or_404(Comment, pk=review_pk)
    comment = get_object_or_404(Comment, pk=comment_pk)
    if request.method == 'DELETE':
        comment.delete()
        data = {
            'delete': f'{ comment_pk }번 댓글이 정상적으로 삭제되었습니다.'
        }
        return Response(data, status=status.HTTP_204_NO_CONTENT)
    elif request.method == 'PUT':
        serializer = CommentSerializer(comment, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
