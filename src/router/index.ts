import { createMemoryHistory, createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'
import { visitorRoutes } from './routes'

const whiteRouteNameList: string[] = [];
// generate visitor routes
(function createVisitorRoutes(routes: RouteRecordRaw[]) {
    routes.map(it => whiteRouteNameList.push(<string>it.name) && createVisitorRoutes(it.children || []))
})(visitorRoutes)

// @ts-ignore
export const router = createRouter({
    history: createWebHistory(),
    routes: visitorRoutes,
    strict: true,
    scrollBehavior: ()=>({left: 0, top: 0})
})
