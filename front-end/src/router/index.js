import { createRouter, createWebHistory } from 'vue-router'
import CatalogueView from '../views/CatalogueView.vue'
import GameView from '../views/GameView.vue'
import EditGameView from '../views/EditGameView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'catalogue',
    component: CatalogueView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/game/:id',
    name: 'game-view',
    component: GameView
  },
  {
    path: '/game/:id/edit',
    name: 'game-edit',
    component: EditGameView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
