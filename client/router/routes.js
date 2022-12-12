import HomePage from '../src/Views/HomePage.vue'
import CurrentForcast from '../src/Views/CurrentForcast.vue'


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
    }
]

export default routes;