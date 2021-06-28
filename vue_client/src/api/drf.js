const SERVER_URL = process.env.VUE_APP_SERVER_URL

// 모듈로 사용하기 위해 export default를 해야 한다.
export default {
  URL: SERVER_URL,
  ROUTES: {
    home: '/movies/',
    detail: '/movies/', 
    recommend: '/movies/recommend/',
    community: '/community/',
    createreview: '/community/create/',
    review: '/community/review/', 
    createcomment: '/community/review/comments/', 
    signup: '/accounts/signup/', 
    login: '/accounts/api-token-auth/', // 로그인시 토큰 필요
    admin: '/api/',
    username: '/accounts/get_username/',
    accounts: '/accounts/',
    setdb: '/movies/updatedb/',
  }
}
