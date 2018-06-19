import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Place from './views/Place.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/places/:uuid',
            name: 'place',
            component: Place,
            props: true
        }
    ]
})
