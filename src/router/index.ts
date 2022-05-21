import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { visitorRoutes } from './routes'
import { App } from 'vue'

const whiteRouteNameList: string[] = [];
// generate visitor routes
(function createVisitorRoutes(routes: RouteRecordRaw[]) {
    routes.map(it => whiteRouteNameList.push(<string>it.name) && createVisitorRoutes(it.children || []))
})(visitorRoutes)
export const router = createRouter({
    history: createWebHashHistory('/'),
    routes: visitorRoutes,
    strict: true,
    scrollBehavior: () => ({left: 0, top: 0})
})

// reset router
export function resetRouter() {
    router.getRoutes().forEach((route) => {
        const {name} = route
        if (name && !whiteRouteNameList.includes(name as string)) {
            router.hasRoute(name) && router.removeRoute(name)
        }
    })
}

// config router
export function setupRouter(app: App<Element>) {
    app.use(router)
}
