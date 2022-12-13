import HomePage from '../src/Views/HomePage.vue'
import FifteenDaysForcast from '../src/Views/FifteenDaysForcast.vue'
import TodayFrocast from '../src/Views/TodayForcast.vue'

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/15-days-forcast',
        name: '15DaysForcast',
        component: FifteenDaysForcast
    },
    {
        path: '/today-forcast',
        name: 'TodayForcast',
        component: TodayFrocast,
    }
]

export default routes;