import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import PostView from '../views/PostView.vue'
//import PostList from '../views/PostList.vue'
//import PostView from '../views/PostForm.vue'
import PostList from '../views/AllPost.vue'
import PostForm from '../views/AddEditPost.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/post',
      name: 'postview',
      component: PostView
    },
    { path: '/posts', name: 'post-list', component: PostList },
    { path: '/posts/create', name: 'create-post', component: PostForm },
    { path: '/posts/edit/:id', name: 'edit-post', component: PostForm, props: true },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: LoginView
    }
  ]
})

export default router
