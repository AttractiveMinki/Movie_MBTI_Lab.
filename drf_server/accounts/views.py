from django.shortcuts import get_object_or_404
from django.views.decorators.csrf import ensure_csrf_cookie
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import UserSerializer
from django.contrib.auth import get_user_model

from django.http import JsonResponse


from django.db.models.query_utils import DeferredAttribute

User = get_user_model()

# 03_vue_with_django 참고
@api_view(['POST'])
def signup(request):
    #1. Client온 데이터 중에서 비밀번호가 일치 하지 않는 경우가 있다면 예외처리를 하자
    password = request.data.get('password')
    passwordConfirmation = request.data.get('passwordConfirmation')
    username = request.data.get('username')

    if password != passwordConfirmation:
        return Response({'error': '비밀번호가 일치하지 않습니다.'}, status=status.HTTP_400_BAD_REQUEST)
    
    user = User.objects.all()
    # 이미 있는 아이디 예외처리 ORM filter도 가능
    # if username in user.username:
    #     return Response({'error': '이미 있는 아이디입니다.'}, status=status.HTTP_400_BAD_REQUEST)

    # 2. User 정보를 직렬화
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        user = serializer.save()
        user.set_password(request.data.get('password'))
        user.save()
    return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET'])
def username(request):
    current_user = get_object_or_404(User, pk=request_pk)
    if request.method == 'GET':
        serializer = UserSerializer(current_user)
        if serializer.is_valid(raise_exception=True):
            serializer.save(username=User.username)
        return JsonResponse(serializer)


@api_view(['POST'])
def getstaff(request):
    print('==----=========')
    AdminUsers = User.objects.filter(is_staff = 1)
    
    print(request)
    print('==----=========')
    result = 0
    for user in AdminUsers:
        if str(user) == request.data.get('username'):
            result = 1
            break

    print(result)
    return Response(result)