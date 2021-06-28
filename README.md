## 관통 프로젝트

### 요약

- 영화 정보 기반 추천 서비스 구성
- 커뮤니티 서비스 구성
- HTML, CSS, JavaScript, Vue.js, Django, REST API, DataBase 등을 활용한 실제 서비스 설계
- 서비스 관리 및 유지보수





### Something Special

- 개개인의 MBTI를 활용한 영화 추천 사이트를 제작하였습니다.
- 본인의 MBTI를 모르는 경우, 홈페이지에서 테스트를 할 수 있도록 하였습니다.
- 영화 정보를 확인하는 곳에서 유튜브 예고편을 볼 수 있도록 하였습니다.





### 상세 구현 과정

프로젝트 구조 - 핸드폰에서도 볼 수 있게 유연한 화면으로 구성하였습니다.



주엽 - Backend Developer / Skeleton Coder / Full Stack

재연 - Frontend Developer / Designer / Project Manager



Vue

```
Home - 주엽
​ 영화 정보 모으기(유튜브 링크)
​ sqlite3로 변환하는 코드 작성하기

Movie detail - 주엽
​ 유튜브 링크 추가하기, 평점 CRUD

Recommend - 재연
​ SELECT MBTI 마무리 

Community  - 재연
​ ReviewList Pagenation
​ Review CRUD // 영화 정보를 DB랑 연동해서 SelectBox로 구현
​ Comment CRUD 

Mypage - 재연
​ 내가 매긴 평점 정보

Admin - 주엽
​ 영화 정보 등록 수정 삭제
```



Django - 주엽



others

figma, ERD 기획 - 재연

MBTI 데이터 수집 - 재연

영화 데이터 수집 - 주엽

디자인 총괄 - 재연





1일차(5. 20 목)

재연님과 프로젝트 명세서가 나온 이후에 작업을 시작하기로 했기 때문에, 목요일 전엔 부족하다고 느낀 Vuex 학습에 집중하였습니다.

명세서가 나오고, ERD와 figma를 만들어야 하는 차례가 왔습니다. 대형 프로젝트를 진행하기 전 ERD와 figma를 만드는 것은 필수적인 일이며, 나중에 번거로운 작업을 줄이는 일이기 때문에 필요성을 잘 느끼고 있었지만, 역시 어려웠습니다. 재연님께서 열심히 도와주신 덕분에, 잘 마무리할 수 있었습니다.



첫 날, ERD와 figma를 따라 장고의 뼈대를 만든 뒤, 뷰와 통신하는 작업을 했습니다. 장고는 오랜 시간동안 다루어서 어느 정도 자신이 있었지만, 뷰는 처음 다뤄보는데다 장고와 어떻게 통신하는지 완벽하게 이해가 되지 않아 헤매기도 했습니다. 점심 시간과 자기 전 틈틈이 인터넷 서핑을 통해, 수업 시간에 배웠던 내용들을 복기하였습니다. 장고는 Response로 Vue에게 신호를 전해주고, Vue는 장고에게 axios로 신호를 전달해주면 되겠구나! 란 생각이 들었습니다.



첫 날과 둘째 날이 제일 어려웠던 것 같습니다. 많은 업무가 남아있다는 생각에 심적으로도 힘들었고, 실제로도 많은 할 일이 남아있는데에 비해 지식이 많이 부족했습니다.



하루종일 작업하는 일도 어색했던 것 같습니다. 수업을 듣고, 방과 후에 복습을 하던 일과는 하루종일 코딩을 하고, 아 이거 왜 안되지 하는 좌절의 연속이었습니다. 특정 부분에서 막혔을땐 정말 아무리 많은 시간이 주어지더라도 문제를 해결할 수 없을 것같은 기분도 들었습니다. 그 때마다 구 선생님과 김재석 교수님께서 도와주신 덕분에 문제를 잘 해결할 수 있었습니다.



기다리던 주말이 왔습니다. 마음 놓고 하루종일 코딩할 수 있는 시간(?)이 온 것입니다. 면접을 코앞에 두고도 열심히 참여해주신 재연님께 이 자리를 빌어 다시 한 번 감사의 말씀 드립니다. 금요일까지 MBTI Test 구현이 완료되었습니다. 누구든 12개의 문항에 답을 하면 본인의 MBTI를 알 수 있게 도와주는 간이 설문이 완성된 것입니다. 



처음부터 완벽하진  않았습니다. 간이 설문을 한 번 끝낸 이후엔, 새로고침 버튼을 눌러야 다른 설문을 진행할 수 있었습니다. 회원가입이 되지 않는 문제도 발생했습니다. 적으면서 돌이켜보니, 정말 많은 마음고생을 했던 게 기억나서 감회가 새롭습니다. 고통받은 과거의 저에게 위로의 말을 전합니다. 간이 설문을 끝낸 뒤 설문 번호 index 값을 0으로 초기화해주었고, 회원가입 진행 중 .env.local 파일을 정상적으로 돌려놓은 뒤에 정상적으로 작동하는 것을 볼 수 있었습니다. Home 화면을 구현한 것, Community 화면을 단순하게 조회 가능하도록 만든 것도 성과였습니다.



다만, 제 발목을 오랜 기간 잡은 것이 있었습니다. 원하는 값이 장고 DB에 들어가지 않았습니다. DB가 중요한 것을 인지하고 있고 소중하다는 것을 알고 있었지만, 제 마음대로 되지 않는 DB를 보며 원망스러울 때가 한 두번이 아니였습니다. 이렇게 까다롭게 생각하던 DB가 또 말썽을 부려서, 가슴이 아팠습니다.



교수님께 MM으로 도움을 요청했고, 교수님 덕분에 문제를 잘 해결할 수 있었습니다. 해법을 듣기 전까지는 어떻게 해야할지 갈피를 잡지 못했는데, 힌트를 얻고나서 구글링을 해보니 왜 이걸 못했을까 하는 생각마저 들었습니다.



일요일엔 업무 분담 및 할 일을 미리 계획했습니다. 업무내용은 다음과 같습니다.

오늘(2021/5/23) 업무 분담

영화 데이터 sqlite3에 넣기

Movie Detail - 유튜브 링크 모으기

Recommend - Select MBTI 마무리

Community - Review CUD

Communiry - Comment CUD

Community - Pagination

MyPage

Admin(관리자 뷰)



(MBTITest 한 번 한 뒤 재시도시 에러)

(Review 등록시 영화 정보 SelectBox로 구현하기)



추가업무

Header, Footer



CreateReview 성공!

감사합니다 교수님ㅠㅠㅠㅠ



금요일까지 기본적인 업무를 마무리하고, 주말에 코드 구현을 끝낸 뒤 월요일부터 디자인을 하자던 그럴 듯한 계획은 서서히 미뤄지고 있었습니다. 능력 부족때문에 어떠한 업무를 맡았을 때 그 업무에 대한 이해와 코드 구현 과정을 설계하고, 실제로 설계하고, 혹여나(사실 거의 대다수의 경우) 에러가 발생하였다면 어디서 에러가 발생하였는지 확인한 뒤에, 해결책을 모색하곤 했습니다.



작업을 하던 중 새로운 문제와 맞닥뜨렸습니다. 로그인을 한 사용자가 있더라도 새로고침을 하면 로그인이 풀리는 버그를 발견한 것입니다. 이것이 Vue의 한계인가.. JWT가 Local Storage에 존재한다는 것은 인지하고 있었지만, JWT를 뜯어본 결과 userid 정도만 갖고 있다는 것을 알게 되었고, 제가 필요한 username에 대한 속성은 갖고 있지 않았습니다. 로그인을 할 때 유저의 정보를 같이 가져오는 방식이었기에, 새로고침을 하면 Vuex에 저장되어 있는 정보는 다 날아갑니다. 대체 어떤 방식으로 구현해야 되는지 막막하였고, 교수님께 구원의 손길을 요청하였습니다. 교수님께선 jwt-decoder의 존재를 알려주셨고, 이 유용한 도구와 Life Cycle Hook 덕분에 jwt에서 user에 관한 정보를 가져올 수 있었습니다. 



1. 사용자 이름 받아와서(로그인된 사용자) vuex에 저장 -완료. 문제 - 새로고침
2. to.name 라우터 밖에서 사용 연구
3. 글 작성 시점에 이름 검사하기
4. 일치할 경우 글 수정 삭제 가능. 3, 4 장고에서 하나?
5. 글 작성 페이지 -> 글 저장하기
6. superuser 권한 주기



우여곡절 끝에 로그인 상태를 유지하는 데에 성공했습니다. Community에 로그인한 사용자만 들어가야 되는 부분도 구현을 완료하였습니다. 이유는 몰랐습니다. 훗날 장고의 도움 덕분이라는 것을 알게 되었습니다. 기본적인 코드 구현을 끝마치기로 했던 월요일이 되었고, 이 즈음에 스트레스가 최고조에 이렀던 것으로 기억합니다. 계획대로 풀리지 않는 상황에 속상하기도 했지만, 열심히 도와주시는 교수님 덕분에, 하나씩 풀리는 문제 덕분에 포기하지 않을 수 있었습니다.



업무 분담

Home

​	영화 정보 모으기(유튜브 링크) - 완료

​	sqlite3로 변환하는 코드 작성하기

Movie detail

​	유튜브 링크 추가하기, 평점 CRUD

Recommend

​	SELECT MBTI 마무리 - 재연

Community

​	ReviewList Pagenation - 재연

​	Review CRUD // 영화 정보를 DB랑 연동해서 SelectBox로 구현 - 재연

​	Comment CRUD - 재연

Mypage

​	내가 매긴 평점 정보 - 재연

Admin

​	영화 정보 등록 수정 삭제



Home

- 영화 정보 모으기 - Detail 만들기 
- sqlite3에 자료 집어넣는 코드 짜기

Movie detail

- 유튜브 링크 추가하기, 평점 CRUD

Recommend

- SELECT MBTI 마무리

Community

- create Review, RD => C 완료
- create Comment, RD
- pagination?
- Mypage => 내 정보
  - 발전 -> Admin 영화 정보 등록 수정 삭제

Movie detail 페이지 만들기

데이터 안가져와지는것들 가져오기 - Serializer 문제

데이터 DB에 넣기

유튜브 예고편 URL 기반으로 가져오기

썸네일 -> 영상 -> 재생



영화 보여주기

1. DB에 저장된 것을 보여주기
   1. 한계 - SQL으로 대량으로 넣기 쉽지 않음
   2. JSON 인식 못함
2. 사이트에서 가져오기
   1. 한계 - 평점 어떻게 보여주고 어떻게 등록?
3. JSON파일을 폴더에서 직접 가져오기
   1. 한계 - 구현을 아직 못함. 평점 등록이 가능한가?



5/24(월) 진행 상황

1. - 

   

- 로그인 유지 기능 해결
- 유저 삭제 기능 구현
  - User 목록에서 새로고침시 다 없어지는 문제
  - User 목록에서 유저를 지우면 바로 사라지지 않는 문제
  - 시간 남으면 Modal창 띄워서 정말 삭제하시겠습니까? 하기

- MBTI 테스트 이후 다시 테스트를 보면 창이 뜨지 않던 버그 수정
  - (검사 뒤 qnaIdx를 0으로 초기화)



1. 로그인 유지 문제 - jwt decode
2. admin 구현 문제 - vue admin-js 검토중
3. 영화 보여주는 기능 - Home



구글링을 통해 영화 정보 JSON 파일을 획득하는 데에 성공했습니다. 유튜브 예고편을 Vue 화면에 띄워주기 위해 유튜브 링크를 손수 모아 파일에 넣었습니다. 그러나, 이 JSON 파일은 제가 어떻게 어르고 달래든 굴하지 않고 DB로 들어가지 않았습니다. ORM을 이용하여 넣어야 하는가 싶어서, 4시간동안 ORM을 공부하였습니다. 어느정도 공부를 마치고 나서 검색의 도움을 받는다면 직접 쓸 정도로 실력이 올라온 뒤에야, 적합하지 않은 형태라는 것을 깨달았습니다. 이 DB란 친구는 애초에 JSON 파일을 받아들일 생각이 없어보였습니다. 



Home

1. DB에 저장된 것을 보여주는 방식(현 방식) - 데이터베이스 시딩

   - 문제 - JSON 대량으로 넣는 방법? sqlite에서 JSON 인식 불가

2. 사이트에서 가져오는 방식(처음 구현한 방식)

   - 문제 - 평점 시스템 어디에 저장?

3. JSON파일을 직접 갖다쓰는 방식

   - 문제 - 구현 방식? 평점 등록이 가능할까?



고민 끝에 교수님께 구원의 손길을 요청하였고, 교수님께서는 loaddata를 알려주셨습니다. 미리 저장해놓았던 gist에서 JSON 파일을 Vue에서 가져와, 장고로 보내 저장한다? 괜찮은 계획같았고, 실제로 Django로 JSON 파일을 보내는 단계까지 수월하게 구현하였습니다. 그러나, 그 이후가 문제였습니다. 이 망할 JSON 파일이 DB에 안들어가는 것이었습니다. 원래 프로그래머는 화가 많은 직업인가요? 컴퓨터공학과 동아리원이 왜 항상 화가 많은 상태였는지 체감하고 있었습니다. 왜 안되지? 란 생각이 꼬리에 꼬리를 물었고, 다시 교수님께 도움을 요청했습니다.



문제의 원인은 genres였습니다. 모델에서 M대M으로 선언된 덕분에 다루기가 매우 까다로웠던 것입니다. genre를 Serializer에서 빼고, Vue에서 사용자에게 입력받기로 한 뒤에 편안하게 DB에 들어가는 JSON 파일의 모습을 볼 수 있었습니다. Serializer, axios, response, DB, JSON 등에 대해 더 배운 하루였습니다. 새벽 늦게까지 열심히 공부하는 학우들을 보며 더 자극을 받는 하루이기도 했습니다.



로그인 유지 문제 -> jwt decode로 해결!

admin 문제 => vue admin-js 검토중

영화 보여주기 구현 -> 고민중 -> DB

DB loaddata 형식에 맞추기?

평점

Admin CRUD + is_staff 정보 가져오기(for admin)



교수님 조언

1. DB -> 불러와서 저장
   1. gist로 요청
   2. 데이터 dict로 변환
   3. 그걸 db에 반환 (MtoM genres... ㅂㄷㅂㄷ)
2. Admin CRUD - admin 말고 폴더 새로 만들어야
3. 평점(영화)

새로고침 -> axios -> gist 요청 보냄 -> 데이터 받음

수정 버튼 -> 기존 data 보이게



5/25 화

footer를 구현하였고, 영화 평점을 구현하였습니다. 다만, 구현 방식엔 다소 아쉬움이 남았습니다. 평점을 숫자로만 줄 수 있기 때문에 눈에 확 들어오지 않았습니다. 몰라서 짜지 못하는 코드는 거의 없었고, 전체적으로 마무리가 되어가는 시점이지만 아직 기존의 목표는 이루지 못해 속상했습니다. 머리도 아프고 코드도 마음대로 짜지지 않아, 단순 데이터 수집을 하면서 노래를 들었고, 힐링하는 시간을 가졌습니다..

재연

게시글, 댓글 수정

이미지 경로 찾기

별점 도와주기

MBTI 결과 경로 설정



주엽

영화정보 DB 저장 -> 완료

Admin CRUD -> C 완료

평점 -> 평균빼고 완료 -> 평균점수만 하자!

영화 평점 수정 삭제

admin movie 수정



5/26 수

이용자들의 평균 평점을 보여주는 코드를 짜고 싶었는데, 평균 값을 구하는 데에 실패하여 구현하지 못했습니다. 파이썬에선 그리 쉽던게 JS에 와서는 왜이렇게 어렵게 느껴지는지 모르겠습니다. 코드를 구현하던 도중, 필요없어보이는 final_pjt의 node_modules, package-lock.json를 지웠다가, 큰 봉변을 당했습니다. Community가 정상적으로 동작하지 않을 뿐만 아니라, 지금껏 써왔던 대부분의 Community 글이 날아간 것입니다. 진땀 흘리기를 어연 2시간. github에 백업해두었던 파일들을 데리고 와서, 간신히 파일을 되살려냈습니다. CASCADE를 몸소 체험한, 다시는 경험하고 싶지 않은 두 시간이었습니다.



Community 댓글 수정 기능을 먼저 구현하였고, 평점에 따른 별 갯수도 그림으로 제시하여 보여주는 데에 성공하였습니다. modal에 관심을 갖고 구현하기를 시도했습니다.

재연님이 구현해주신 MBTI 검사 항목에서, id가 아닌 영화의 이름으로 값을 불러오고자 하였습니다. DB의 특성상 영화를 삭제한 뒤 다시 등록하면 id가 바뀌는데 이 경우 적절한 영화 정보를 가져올 수 없었기 때문입니다. 머릿속으로는 대충 구현하였지만, 어떻게 해결할 지 막막한 것은 마찬가지였습니다.

커다란 문제는 없었고, 사용자 편의를 위한 자잘한 기능만 남아있었기에 마음의 부담은 한결 나아졌습니다. 게다가, 교수님께서 영상 제출은 필수가 아닌 권장 사항이라는 것을 알려주셨기 때문에, 하루를 더 받은 듯한 기분마저도 들었습니다.

1. Community 댓글 수정 -> 완료
2. 평점 수정 -> 완료. 평균 평점 포기
3. Selected MBTI 페이지 이동했다가 뒤로 가기 누르면 다 사라지는 문제 -> vuex에 값을 저장하지 않고 임시로 들고 있어서 생기는 문제. 다 들어엎어야하는데 시간 부족으로 포기.
4. modal -> 구현만 완료. 목요일에 응용하여 여기저기 써먹을 예정.
5. 글 작성 후 새로고침 없이 글이 바로 보이게 -> goback함수 호출했다가 바로 다시 돌아가는 등 여러 시도. 큰 성과 없이 글 수정/삭제 후 상위 폴더로 이동하는 방법 선택.
6. admin 권한 => verifyUser 함수 호출 -> 완료
7. MBTI 고른 뒤 영화 리스트 보여줄 때, 고정된 id값 대신 영화 제목으로 검색하기
8. 페이지네이션
9. 별점 시각화 구현 -> 완료



admin 권한을 얻기 위해 authorization을 얼마나 검색했는지 모르겠다. django authorization, vue authorization, jwt authorization 등등.. 코드에 많은 도움이 되진 않았지만, 덕분에 authentication과 authorization을 확실하게 구분할 수 있게 되었고, jwt에 대해서도 더 깊이있는 이해를 하게 되었다. 학부생 시절 jwt를 배웠던 기억도 어렴풋이 났다. 학부 수준에서는 이런 암호화 방식도 있다 하고 넘어갔기 때문에, 지금 훨씬 더 높은 수준의 이해를 하고 있다. admin인지를 검사하기 위해, 결국 장고에서 is_staff를 체크하는 함수를 하나 만들었다. JavaScript, Vue를 사용하다가 python(Django)를 사용하니 코드가 술술 짜졌다. 마치 영어만을 이용하여 의사소통하다가, 한국말을 하는 기분이었다.



5/27 목

요 며칠 잠을 많이 못잤다. 정신이 없기도 하고 집중도 안되고 머리도 아파서 오전엔 머리를 쓰지 않아도 되는(된다고 생각한) 영화 크롤링 작업을 하였다. MBTI 유형 검사 결과 추천해주는 영화 목록과, 우리가 갖고 있는 영화 목록에 다소 차이가 있어 이를 맞추기 위해 추천해주는 영화들의 JSON 파일들을 갖고와야 했다. 막막했다. 어디서부터 해야하지? 막막한데 비해 많은 시간을 헤매진 않았다. 과거에 정말 아무것도 모르면서 홈페이지에서 beautifulsoup만을 이용하여 크롤링한 경험도 있을 뿐더러, 찾아보니 수업시간에 배웠던 tmdb api, Postman을 잘 활용하면 데이터를 금방 가져올 수 있었다. postman 덕분에 100시간 정도 번 것 같다. 100시간을 벌어준 데이터는 생각보다 정돈되어있지 않았다. 100시간을 벌었다지만, 이 많은 데이터를 형식에 맞게 일일이 복사하고 앉아있다가는 오늘 안에 끝내지 못할 뿐더러, 정신 건강에도 좋지 않다는 판단을 내렸다. 어떡하지? 분석해보니, POSTMAN으로 받은 파일들은 리스트, 딕셔너리 형태로 이루어져 있었기 때문에 파이썬으로 작업이 가능할 것 같았다.

1. tmdb 홈페이지에서 영화 정보를 찾는다. 영화의 id만 알아내면 된다.
2. POSTMAN에 이 링크를 집어넣는다. GET 요청을 보낸다.



https://api.themoviedb.org/3/movie/603?api_key=a768a753ca0dca7ad06a38bb7b13d976&language=ko&append_to_response=videos

위의 링크에서 603 부분이 영화 id이다. 저 부분만 바꾸어가면서 진행했다. api_key, language 정보, append_to_response 정보는 링크에 포함되어있다.



3. 받은 데이터를 확인한다.

```
{
    "adult": false,
    "backdrop_path": "/fNG7i7RqMErkcqhohV2a6cV1Ehy.jpg",
    "belongs_to_collection": {
        "id": 2344,
        "name": "매트릭스 시리즈",
        "poster_path": "/lh4aGpd3U9rm9B8Oqr6CUgQLtZL.jpg",
        "backdrop_path": "/bRm2DEgUiYciDw3myHuYFInD7la.jpg"
    },
    "budget": 63000000,
    "genres": [
        {
            "id": 28,
            "name": "액션"
        },
        {
            "id": 878,
            "name": "SF"
        }
    ],
    "homepage": "http://www.warnerbros.com/matrix",
    "id": 603,
    "imdb_id": "tt0133093",
    "original_language": "en",
    "original_title": "The Matrix",
    "overview": "인간의 기억마저 AI에 의해 입력되고 삭제되는 세상, 진짜보다 더 진짜 같은 가상 현실 매트릭스. 그 속에서 진정한 현실을 인식할 수 없게 재배되는 인간들. 그 매트릭스를 빠져 나오면서 AI에게 가장 위험한 인물이 된 모피어스는 몇 안 되는 동료들과 함께 기계와의 전쟁 전후의의 폐허를 떠돌며 인류를 구할 마지막 영웅을 찾아 헤맨다. 마침내 모피어스는 낮에는 평범한 회사원 앤더슨으로, 밤에는 해커로 활동하는 청년 네오를 그로 지목한다. 모피어스의 지시대로 그를 만나게 된 네오는 두개의 알약 중 하나를 고르는 선택을 하게 되는데...",
    "popularity": 42.153,
    "poster_path": "/yI9r0iz2XvlevxUzxvdoQmv3yce.jpg",
    "production_companies": [
        {
            "id": 79,
            "logo_path": "/tpFpsqbleCzEE2p5EgvUq6ozfCA.png",
            "name": "Village Roadshow Pictures",
            "origin_country": "US"
        },
        {
            "id": 372,
            "logo_path": null,
            "name": "Groucho II Film Partnership",
            "origin_country": ""
        },
        {
            "id": 1885,
            "logo_path": "/xlvoOZr4s1PygosrwZyolIFe5xs.png",
            "name": "Silver Pictures",
            "origin_country": "US"
        },
        {
            "id": 174,
            "logo_path": "/IuAlhI9eVC9Z8UQWOIDdWRKSEJ.png",
            "name": "Warner Bros. Pictures",
            "origin_country": "US"
        }
    ],
    "production_countries": [
        {
            "iso_3166_1": "AU",
            "name": "Australia"
        },
        {
            "iso_3166_1": "CA",
            "name": "Canada"
        },
        {
            "iso_3166_1": "US",
            "name": "United States of America"
        }
    ],
    "release_date": "1999-03-30",
    "revenue": 463517383,
    "runtime": 136,
    "spoken_languages": [
        {
            "english_name": "English",
            "iso_639_1": "en",
            "name": "English"
        }
    ],
    "status": "Released",
    "tagline": "서기 2199년, 인공지능 AI에 의해 인류가 재배되고 있다",
    "title": "매트릭스",
    "video": false,
    "vote_average": 8.2,
    "vote_count": 19214,
    "videos": {
        "results": [
            {
                "id": "5d7faf30c54304001396f929",
                "iso_639_1": "ko",
                "iso_3166_1": "KR",
                "key": "0ls4kZG3nxA",
                "name": "[매트릭스] 4DX 재개봉 예고편",
                "site": "YouTube",
                "size": 1080,
                "type": "Trailer"
            }
        ]
    }
}
```

내가 필요한 정보는 다음과 같다.

title, release_date, popularity, vote_count, vote_average, overview, poster_path, genres, 

id, rank, youtube_link는 따로 넣어주어야 했다.

위의 정보에서 빠른 추출을 위해 다음과 같은 파이썬 코드를 이용하였다.

```python
false = False
null = None
data = {
    "adult": false,
    "backdrop_path": "/fNG7i7RqMErkcqhohV2a6cV1Ehy.jpg",
    "belongs_to_collection": {
        "id": 2344,
        "name": "매트릭스 시리즈",
        "poster_path": "/lh4aGpd3U9rm9B8Oqr6CUgQLtZL.jpg",
        "backdrop_path": "/bRm2DEgUiYciDw3myHuYFInD7la.jpg"
    },
    "budget": 63000000,
    "genres": [
        {
            "id": 28,
            "name": "액션"
        },
        {
            "id": 878,
            "name": "SF"
        }
    ],
    "homepage": "http://www.warnerbros.com/matrix",
    "id": 603,
    "imdb_id": "tt0133093",
    "original_language": "en",
    "original_title": "The Matrix",
    "overview": "인간의 기억마저 AI에 의해 입력되고 삭제되는 세상, 진짜보다 더 진짜 같은 가상 현실 매트릭스. 그 속에서 진정한 현실을 인식할 수 없게 재배되는 인간들. 그 매트릭스를 빠져 나오면서 AI에게 가장 위험한 인물이 된 모피어스는 몇 안 되는 동료들과 함께 기계와의 전쟁 전후의의 폐허를 떠돌며 인류를 구할 마지막 영웅을 찾아 헤맨다. 마침내 모피어스는 낮에는 평범한 회사원 앤더슨으로, 밤에는 해커로 활동하는 청년 네오를 그로 지목한다. 모피어스의 지시대로 그를 만나게 된 네오는 두개의 알약 중 하나를 고르는 선택을 하게 되는데...",
    "popularity": 42.153,
    "poster_path": "/yI9r0iz2XvlevxUzxvdoQmv3yce.jpg",
    "production_companies": [
        {
            "id": 79,
            "logo_path": "/tpFpsqbleCzEE2p5EgvUq6ozfCA.png",
            "name": "Village Roadshow Pictures",
            "origin_country": "US"
        },
        {
            "id": 372,
            "logo_path": null,
            "name": "Groucho II Film Partnership",
            "origin_country": ""
        },
        {
            "id": 1885,
            "logo_path": "/xlvoOZr4s1PygosrwZyolIFe5xs.png",
            "name": "Silver Pictures",
            "origin_country": "US"
        },
        {
            "id": 174,
            "logo_path": "/IuAlhI9eVC9Z8UQWOIDdWRKSEJ.png",
            "name": "Warner Bros. Pictures",
            "origin_country": "US"
        }
    ],
    "production_countries": [
        {
            "iso_3166_1": "AU",
            "name": "Australia"
        },
        {
            "iso_3166_1": "CA",
            "name": "Canada"
        },
        {
            "iso_3166_1": "US",
            "name": "United States of America"
        }
    ],
    "release_date": "1999-03-30",
    "revenue": 463517383,
    "runtime": 136,
    "spoken_languages": [
        {
            "english_name": "English",
            "iso_639_1": "en",
            "name": "English"
        }
    ],
    "status": "Released",
    "tagline": "서기 2199년, 인공지능 AI에 의해 인류가 재배되고 있다",
    "title": "매트릭스",
    "video": false,
    "vote_average": 8.2,
    "vote_count": 19214,
    "videos": {
        "results": [
            {
                "id": "5d7faf30c54304001396f929",
                "iso_639_1": "ko",
                "iso_3166_1": "KR",
                "key": "0ls4kZG3nxA",
                "name": "[매트릭스] 4DX 재개봉 예고편",
                "site": "YouTube",
                "size": 1080,
                "type": "Trailer"
            }
        ]
    }
}

print('  {')
print('    "id": ,')
print('    "rank": ,')
print('    "title": "{}",' .format(data.get('title')))
print('    "release_date": "{}",' .format(data.get('release_date')))
print('    "popularity": {},' .format(data.get('popularity')))
print('    "vote_count": {},' .format(data.get('vote_count')))
print('    "vote_average": {},' .format(data.get('vote_average')))
print('    "overview": "{}",' .format(data.get('overview')))
print('    "poster_path": "{}",' .format(data.get('poster_path')))
print('    "genres": {},' .format(data.get('genres')))
print('    "youtube_link": ,')
print('  },')
```

data에 POSTMAN에서 복사해온 파일들을 번갈아 붙여넣는다.



결과는 다음과 같다.

```
  {
    "id": ,
    "rank": ,
    "title": "매트릭스",
    "release_date": "1999-03-30",
    "popularity": 42.153,
    "vote_count": 19214,
    "vote_average": 8.2,
    "overview": "인간의 기억마저 AI에 의해 입력되고 삭제되는 세상, 진짜보다 더 진짜 같은 가상 현실 매트릭스. 그 속에서 진정한 현실을 인식할 수 없게 재배되는 인간들. 그 매트릭스를 빠져 나오면서 AI에게 가장 위험한 인물이 된 모피어스는 몇 안 되는 동료들과 함께 기계와의 전쟁 전후의의 폐허를 떠돌며 인류를 구할 마지막 영웅을 찾아 헤맨다. 마침내 모피어스는 낮에는 평범한 회사원 앤더슨으로, 밤에는 해커로 활동하는 청년 네오를 그로 지목한다. 모피어스의 지시대로 그를 만나게 된 네오는 두개의 알약 중 하나를 고르는 선택을 하게 되는데...",
    "poster_path": "/yI9r0iz2XvlevxUzxvdoQmv3yce.jpg",
    "genres": [{'id': 28, 'name': '액션'}, {'id': 878, 'name': 'SF'}],
    "youtube_link": ,
  },
```

이를 gist에 넣는 작업을 반복한다.

youtube_link는 '영화 이름' 예고편, 'movie name' trailer 등을 검색하여 직접 가져왔다.

눈물겨운 인간크롤링 작업을 마치고(위의 코드 덕분에 10시간은 더 벌었다.) 눈물겨운 점심을 먹었다. 아직 해결하지 못했던 몇몇 문제를 해결했다. 커뮤니티 댓글 수정 버튼이 잘 눌리지 않았다. 정확히 말해, 수정해야 할 값을 들고 오지 못했다. life cycle을 이용하여 수정 버튼이 눌리기 전 어떤 댓글을 가져와야 하는지 지정해주어 문제를 해결했다.

영화 detail의 삭제 버튼을 누르면 영화 수정하기 로 이동하던 문제도 해결하였다. modal의 id가 중복되어 지정되어 있어서 발생한 문제였다.

Movie Detail의 문제도 손보았다. 댓글을 입력할 때 제목을 입력받지 않아 에러가 나는 상황을 해결하였다.



MBTI 유형별 추천 영화 리스트를 재연님께서 정리해주셨다. 이를 기반으로 코드를 다듬고, 영화 제목으로부터 추천 영화 리스트를 가져오는데에 성공했다. 이 뿐만 아니라, 글자를 클릭하면 영화의 세부 정보로 이동할 수 있게 되었다.



일주일간의 프로젝트였다. 컴공 친구들과 한 번의 프로젝트 경험이 있었지만, 난 코드 문외한이었고 이끌려가는 방식이었다. 데이터 수집에 약간의 도움을 주었을 뿐이다. 일주일이라면 짧다면 짧고, 길다면 긴 기간동안 하나의 프로젝트만 생각하며 산 것은 처음이다. 색다른 경험이었고, 한 편으로는 어떤 문제에 부딪혔을 때 답이 생각나지 않아 좌절하는 경험은 앞으로 많이 하고싶지 않다. 교수님께 질문을 드렸을 때, 주엽님이라면 어떻게 할 것 같아요? 라고 되물으시면서, 현직에 가셨더라면 어떻게 하셨을 것 같냐는 물음이 내게 큰 울림을 주었다. 현장에 가서도 어렵다고 어리광부리며 마냥 물어볼 수는 없는 것이다. 교수님의 조언과 말씀 덕분에, 모를 때 모르더라도 내가 어느 부분까지는 알고, 어느 부분에 도움이 필요한지에 대해 한 번 더 생각해본 뒤에 질문을 하게 되었다. 앞으로도 좋은 버릇으로 남기고 싶다.



다행히, 목표한 서비스는 모두 구현했다. 초반에 헤매지 않았더라면, 시간이 더 있었다면 몇몇 부분을 더 디테일하게 만질 수 있지 않았을까 하는 아쉬움은 있다.



우리 홈페이지는 Home, Community, Recommend(MBTI Test, Select MBTI), Mypage, Logout, 숨겨진 Admin으로 이루어져 있다.

Home 화면에서 여러 영화들에 대한 정보를 볼 수 있고, 사용자들의 리뷰 및 평점을 볼 수 있다. 로그인한 사용자만 평점을 매길 수 있다.

Community 에서 여러 사용자들과 영화에 대한 이야기를 나눌 수 있다. 게시글 CRUD, 댓글 CURD가 구현되어 있으며, 본인만 삭제 및 수정이 가능하다. 수정/삭제 시간도 확인할 수 있다.

Recommend에선 본인의 MBTI에 맞는 추천 영화를 확인할 수 있다. 본인의 MBTI를 미리 알고 있다면 Select MBTI를, 간이 테스트를 통해 본인의 MBTI를 확인해보고 싶다면 MBTI Test를 선택하면 된다. 

Mypage 옆에는 본인의 로그인 여부 및 본인의 아이디를 확인할 수 있는 란이 있다.

Admin 페이지는 is_staff, 즉 관리자 권한이 있는 사람만 들어갈 수 있다. 보안을 위해, 관리자 권한이 있는 사람일지라도 새로고침 버튼을 눌렀다면 admin 페이지에 입장하기 위해 재로그인을 해야 한다.

Mypage에서 본인이 작성한 게시글과 댓글을 확인할 수 있다. 클릭시 어떤 게시글에 위와 같은 글을 달았는지도 확인할 수 있다.

Logout, Login 버튼을 통해 로그아웃과 로그인을 할 수 있다.

로그인이 되어있지 않은 상태라면 Signup 버튼을 통해 회원가입을 할 수 있다.

위엔 header, 아래엔 footer바가 있어 편리하게 사용할 수 있고, UX와 UI를 높였다.





##### 마무리

- 같이 코드를 짰던 재연님 덕분에 원만하게 끝났다. 많은 시간이 소요될 것으로 예상했는데, 실제로 많은 시간이 소요되었고 오늘 내로 이 프로젝트를 끝내지 못할 것만 같은 기분이 들 때도 있어서 무서웠었다. 다행히 제 시간내에 끝나서 행복했다. 서로 부족한 부분을 도와주면서 작업할 수 있는 점도 좋았다.
- 우리 반 학우분들 중 똑똑한 분이 많은 것 같다. 항상 겸손하게, 초심을 잃지 않도록 노력해야겠다.
- 한 학기가 벌써 끝나 학우들, 교수님과 헤어질 생각을 하니 아쉽다. 
- 많은 질문에 친절하게 답해주셔서 너무 좋았습니다. 그동안 감사했습니다! 
