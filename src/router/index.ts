import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import ThinkNumber from '../components/ThinkNumber.vue'
import CardDisplay from '../components/CardDisplay.vue'
import InputCards from '../components/InputCards.vue'
import PredictionPage from '../components/PredictionPage.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: HomePage },
  { path: '/think-number', component: ThinkNumber },
  { path: '/show-cards', component: CardDisplay },
  { path: '/input-cards', component: InputCards },
  {
    path: '/prediction-page/:result',
    component: PredictionPage,
    name: 'PredictionPage',
    props: route => ({ result: Number(route.params.result) }) // Chuyển đổi result sang số nếu cần
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
