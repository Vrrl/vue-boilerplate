export default [
    {
        name: 'Dashboard',
        path: '/dashboard',
        component: () => import(/* webpackChunkName: "Dashboard" */'./pages/index.vue'),
    }
]