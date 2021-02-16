import { createRouter, createWebHistory } from 'vue-router'
import Main from './components/Main.vue'
import Post from './views/Post.vue'

const routes = [
  { path: '/', component: Main },
  { path: '/post/:id?', name: 'post', props: true, component: Post }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
