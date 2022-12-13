import HomePage from '../src/Views/HomePage.vue'
import CurrentForcast from '../src/Views/CurrentForcast.vue'
import TodayFrocast from '../src/Views/TodayForcast.vue'

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/current-forcast',
        name: 'CurrentForcast',
        component: CurrentForcast
    },
    {
        path: '/today-forcast',
        name: 'TodayForcast',
        component: TodayFrocast,
    }
]

export default routes;