import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import AddPostView from '../views/AddPostView.vue';
import PostView from '../views/PostView.vue';
import EditPostView from '../views/EditPostView.vue';
import Article from '../views/Article.vue';
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  
  {
    path: '/article/:id', // Dynamic route with ID parameter
    component: Article,
    name: 'article' // Optional route name for navigation
  },
  {
    path: '/add-post',
    name: 'add-post',
    component: AddPostView
  },
  {
    path: '/post/:id',
    name: 'post',
    component: PostView
  },
  {
    path: '/edit-post/:id',
    name: 'edit-post',
    component: EditPostView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router