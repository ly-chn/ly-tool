import {RouteRecordRaw} from 'vue-router'

export const visitorRoutes: RouteRecordRaw[] = [{
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
    meta: {
        title: '首页',
        icon: 'mdi-account-circle',
        requiresAuth: false,
        roles: ['visitor'],
        permissions: ['visitor']
    }
}]
