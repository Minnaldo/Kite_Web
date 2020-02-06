import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LoginPage from '../views/LoginPage.vue'
import ArticleDetail from '../views/ArticleDetail.vue'
import SignUp from '../views/SignUp.vue'
import NaverLogin from '../components/NaverLogin.vue'
import IndiRepository from '../views/IndiRepository.vue'
import SelectCompany from '../views/SelectCompany.vue'
import Analysis from '../views/Analysis.vue'
import WordCloud from '../components/WordCloud.vue'
import ForceDirected from '../components/ForceDirected.vue'
import Empty from '../views/Empty.vue'
import following from '../views/following.vue'
import ArticleCorpo from '../views/ArticleCor.vue'
import follow from '../views/follow.vue'
import MemberList from '../views/memberlist.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/loginpage',
    name: 'loginpage',
    component: LoginPage
  },

  {
    path: '/articleDetail/:id',
    name: 'articledetail',
    component: ArticleDetail,
    props: true
  },
  {
    path: '/articlecorpo/:company',
    name: 'articlecorpo',
    component: ArticleCorpo,
    props: true
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },

  {
    path: '/indirepository',
    name: 'indirepository',
    component: IndiRepository
  },
  {
    path: '/naver',
    name: 'naver',
    component: NaverLogin
  },
  {
    path: '/selectcompany',
    name: 'selectcompany',
    component: SelectCompany
  },
  {
    path: '/analysis',
    name: 'analysis',
    component: Analysis
  },
  {
    path: '/wordcloud',
    name: 'wordcloud',
    component: WordCloud
  },
  {
    path: '/forcedirected',
    name: 'forcedirected',
    component: ForceDirected
  },
  {
    path: '/empty',
    name: 'empty',
    component: Empty
  },
  {
    path: '/following',
    name: 'following',
    component: following
  },
  {
    path: '/follow',
    name: 'follow',
    component: follow
  },
  {
    path: '/memberlist',
    name: 'memberlist',
    component: MemberList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
