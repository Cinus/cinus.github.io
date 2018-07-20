import Vue from 'vue'
import Main from '@/components/common/Main'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Main',
            component: Main
        }
    ]
})
