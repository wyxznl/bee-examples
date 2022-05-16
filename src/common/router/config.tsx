import { lazy } from 'react'

export default [
    {
        path: '/',
        component: lazy(() => import('@/pages/Home')),
    },
    {
        path: '/hooks',
        component: lazy(() => import('@/pages/Hooks')),
        children: [
            {
                path: '/hooks/useForm',
                component: lazy(() => import('@/pages/Hooks/UseForm')),
            },
            {
                path: '/hooks/aresHooks',
                component: lazy(() => import('@/pages/Hooks/AresHooks')),
            },
        ],
    },
    {
        path: '/recoil',
        component: lazy(() => import('@/pages/Recoil')),
    },
]
