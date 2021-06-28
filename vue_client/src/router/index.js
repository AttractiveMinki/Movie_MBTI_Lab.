import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/movies/Home.vue'
import Recommend from '@/views/movies/Recommend.vue'
import Community from '@/views/community/Community.vue'
import CreateReview from '@/views/community/CreateReview.vue'
import Review from '@/views/community/Review.vue'
import Signup from '@/views/accounts/Signup'
import Login from '@/views/accounts/Login'
import MBTIMovie from '@/views/mbti/MBTIMovie'
import MBTITestStart from '@/views/mbti/MBTITestStart'
import MBTITestResult from '@/views/mbti/MBTITestResult'
import MBTITestQuestions from '@/views/mbti/MBTITestQuestions'
import SelectMBTI from '@/views/mbti/SelectMBTI'
import MyPage from '@/views/accounts/MyPage'
import Admin from '@/views/admin/Admin'
import MovieDetail from '@/components/MovieDetail'
import MovieDetailReviewChange from '@/components/MovieDetailReviewChange'
import AdminUser from '@/views/admin/User'
import AdminUserDetail from '@/components/UserDetail'
import AdminUserCreate from '@/components/UserCreate'
import AdminUserChange from '@/components/UserChange'
import AdminCommunity from '@/views/admin/Community'
import AdminMovie from '@/views/admin/Movie'
import AdminMovieDetail from '@/components/AdminMovieDetail'
import AdminMovieCreate from '@/components/AdminMovieCreate'
import AdminMovieChange from '@/components/AdminMovieChange'
import AdminReviewDetail from '@/components/AdminReviewDetail'
import ReviewChange from '@/components/ReviewChange'
import ReviewCommentChange from '@/components/ReviewCommentChange'


Vue.use(VueRouter)

const routes = [
  {
    path: '/movies',
    name: 'Home',
    component: Home,
  },
  {
    path: '/movies/recommend',
    name: 'Recommend',
    component: Recommend,
  },
  {
    path: '/community/community',
    name: 'Community',
    component: Community,
  },
  {
    path: '/community/createreview',
    name: 'CreateReview',
    component: CreateReview,
  },
  {
    path: '/community/review',
    name: 'Review',
    component: Review,
  },
  {
    path: '/accounts/signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/accounts/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/mbti/mbtiteststart',
    name: 'MBTITestStart',
    component: MBTITestStart,
  },
  {
    path: '/mbti/mbtitestresult',
    name: 'MBTITestResult',
    component: MBTITestResult,
  },
  {
    path: '/mbti/mbtitestquestions',
    name: 'MBTITestQuestions',
    component: MBTITestQuestions,
  },
  {
    path: '/mbti/selectmbti',
    name: 'SelectMBTI',
    component: SelectMBTI,
  },
  {
    path: '/mbti/mbtimovie',
    name: 'MBTIMovie',
    component: MBTIMovie,
  },
  {
    path: '/accounts/mypage',
    name: 'MyPage',
    component: MyPage,
  },
  {
    path: '/admin/admin',
    name: 'Admin',
    component: Admin,
  },
  {
    path: '/components/movieDetailReviewChange',
    name: 'MovieDetailReviewChange',
    component: MovieDetailReviewChange,
  },
  {
    path: '/components/moviedetail',
    name: 'MovieDetail',
    component: MovieDetail,
  },
  {
    path: '/admin/user',
    name: 'AdminUser',
    component: AdminUser,
  },
  {
    path: '/components/userdetail',
    name: 'AdminUserDetail',
    component: AdminUserDetail,
  },
  {
    path: '/components/usercreate',
    name: 'AdminUserCreate',
    component: AdminUserCreate,
  },
  {
    path: '/components/userchange',
    name: 'AdminUserChange',
    component: AdminUserChange,
  },
  {
    path: '/admin/community',
    name: 'AdminCommunity',
    component: AdminCommunity,
  },
  {
    path: '/admin/movie',
    name: 'AdminMovie',
    component: AdminMovie,
  },
  {
    path: '/components/adminmoviedetail',
    name: 'AdminMovieDetail',
    component: AdminMovieDetail,
  },
  {
    path: '/components/adminmoviecreate',
    name: 'AdminMovieCreate',
    component: AdminMovieCreate,
  },
  {
    path: '/components/adminmoviechange',
    name: 'AdminMovieChange',
    component: AdminMovieChange,
  },
  {
    path: '/components/adminreviewdetail',
    name: 'AdminReviewDetail',
    component: AdminReviewDetail,
  },
  {
    path: '/components/reviewchange',
    name: 'ReviewChange',
    component: ReviewChange,
  },
  {
    path: '/components/reviewcommentchange',
    name: 'ReviewCommentChange',
    component: ReviewCommentChange,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router


router.beforeEach((to, from, next) => {
  
  //1-1. 로그인이 필요한 컴포넌트
  const authPages = [
    'MyPage', 
    'Admin',
  ]
  //1-2. 로그아웃이 필요한 컴포넌트(로그인 상태가 아닌 경우에 방문해야 하는 컴포넌트)
  const publicPages = [
    'Login', 
    'Signup',
  ]

  //2. 
  // 가려고 하는 곳(to)이 로그인이 필요한 곳인지 여부를 체크하자 -> true / false 
  const authRequired = authPages.includes(to.name)
  // 가려고 하는 곳이 로그인이 필요하지 않은 곳은지 여부를 체크하자 -> true / false 
  const authNotRequired = publicPages.includes(to.name)
  // 로그인이 되어있는지 여부를 체크하자 -> true / false
  const isLoggedIn = localStorage.getItem('jwt') ? true : false


  //3. 
  //3-1. 만약 로그인이 필요한 컴포넌트인데 로그인이 안되어 있는 경우에 강제로 가려고 하면?
  if (authRequired && !isLoggedIn) {
    // 로그인을 할 수 있도록 (가드) -> Login 컴포넌트로 보내자
    next({ name: 'Login' })
  //3-2. 만약 로그인이 필요하지 않은 컴포넌트인데 로그인이 되어있는 상태에서 강제로 가려고 하면?
  } else if (authNotRequired && isLoggedIn) {
    next({ name: 'Home' })
  } else {
    next()
  }
})
