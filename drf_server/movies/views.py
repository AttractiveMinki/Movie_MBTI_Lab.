from django.shortcuts import get_list_or_404, get_object_or_404
from rest_framework.serializers import Serializer
from .models import Genre, Movie, Review, Comment
from .serializers import MovieListSerializer, MovieSerializer, CommentSerializer, ReviewSerializer

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

# import json

@api_view(['GET', 'POST'])
def index(request):
    # 만약 GET 요청이라면(조회)
    if request.method == 'GET':
        # Movie list를 받아온다. 없으면 404 에러 반환
        movies = get_list_or_404(Movie)
        # 직렬화
        serializer = MovieListSerializer(movies, many=True)
        # 직렬화 정보 반환
        return Response(serializer.data)

    # 만약 POST 요청이라면(쓰기)
    elif request.method == 'POST':
        # 요청으로 들어온 데이터를 Movie에 직렬화
        serializer = MovieSerializer(data=request.data)
        # 만약 데이터가 검증되었다면
        if serializer.is_valid(raise_exception=True):
            # 저장
            serializer.save()
            # 데이터 반환하면서 성공적으로 처리되었음을 알린다.
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'DELETE', 'PUT'])
def detail(request, movie_pk):
    # movie 데이터를 가져오고 없으면 404 에러를 출력한다.
    movie = get_object_or_404(Movie, pk=movie_pk)
    # 들어온 값이 GET이라면
    if request.method == 'GET':
        # MovieSerializer를 통해 movie 데이터를 직렬화한다.
        serializer = MovieSerializer(movie)
        # 직렬화된 데이터 반환
        return Response(serializer.data)
    # 들어온 메서드가 DELETE라면
    elif request.method == 'DELETE':
        movie.delete()
        data = {
            'delete': f'영화번호 {movie_pk}번이 정상적으로 삭제되었습니다.'
        }
        return Response(data, status=status.HTTP_204_NO_CONTENT)
    # 들어온 메서드가 PUT이라면(수정)
    elif request.method == 'PUT':
        # movie 데이터를 직렬화한다. request 데이터를 참고한다.
        serializer = MovieSerializer(movie, data=request.data)
        # 만약 검증된 데이터라면
        if serializer.is_valid(raise_exception=True):
            # 직렬화 정보를 저장한다.
            serializer.save()
            # 정보를 반환한다.
            return Response(serializer.data)
        

@api_view(['POST'])
def review_create(request, movie_pk):

    # movie_pk로 movie의 정보를 가져온다.
    movie = get_object_or_404(Movie, pk=movie_pk)
    # 요청받은 데이터를 직렬화한다.
    serializer = ReviewSerializer(data=request.data)
    # 데이터가 유효한 값인지 확안한다.
    if serializer.is_valid(raise_exception=True):
        # 데이터를 저장한다. 영화 정보는 movie이다.
        serializer.save(movie=movie, username=request.data.get('username'))
        # 직렬화된 데이터를 반환한다.
        return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'DELETE', 'PUT'])
def review_detail(request, movie_pk, review_pk):
    # review_pk에 맞는 값을 가져온다.
    review = get_object_or_404(Review, pk=review_pk)
    # 만약 메서드가 GET이라면
    if request.method == 'GET':
        # 직렬화 데이터를 가져온다.
        serializer = ReviewSerializer(review)
        # 직렬화된 데이터를 반환해준다.
        return Response(serializer.data)
    # 만약 메서드가 DELETE라면
    elif request.method == 'DELETE':
        # 리뷰를 지운다.
        review.delete()
        data = {
            'delete': f'리뷰 {review_pk}번이 정상적으로 삭제되었습니다.'
        }
        # 삭제 알림 데이터와 HTTP 204를 반환한다.
        return Response(data, status=status.HTTP_204_NO_CONTENT)
    # 만약 메서드가 PUT이라면
    elif request.method == 'PUT':
        # review 정보를 가져온다. request의 데이터는 그대로 유지한다.
        serializer = ReviewSerializer(review, data=request.data)
        # 만약 serializer가 검증된 데이터라면
        if serializer.is_valid(raise_exception=True):
            # 데이터를 저장한다.
            serializer.save()
            # 저장한 데이터를 반환해준다.
            return Response(serializer.data)
        

@api_view(['POST'])
def comment_create(request, movie_pk, review_pk):
    comment = get_object_or_404(Comment, pk=review_pk)
    serializer = CommentSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save(comment=comment)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
        

# 로그인 or admin user만 접근 가능

@api_view(['POST'])
def updatedb(request):
    for i in range(len(request.data)):
        response = request.data[i]
        title = response.get('title')
        release_date = response.get('release_date')
        popularity = response.get('popularity')
        rank = response.get('rank')
        vote_count = response.get('vote_count')
        vote_average = response.get('vote_average')
        overview = response.get('overview')
        poster_path = response.get('poster_path')
        youtube_link = response.get('youtube_link')
        result = Movie.objects.create(
            title=title, release_date=release_date, popularity=popularity,
            rank=rank, vote_count=vote_count, vote_average=vote_average,
            overview=overview, poster_path=poster_path, youtube_link=youtube_link)
        result.save()
    return Response(result, status=status.HTTP_201_CREATED)
    
#     pass
#     # 1. gist로 요청을 보낸다.
#     # 2. 받은 데이터를 dict로 변환한다.
#     # import json
#     # .json()으로 변환 
#     # 리스트면 반복문으로 dict 하나씩 꺼내서,,
#     response = requests.get(url, gist주소).json()
#     title = response.get('title')
#     # 3. 그 데이터를 db에 저장한다.
#     # db 자체를 db에 생성
#     Movie.objects.create(title=title, content=response.content)