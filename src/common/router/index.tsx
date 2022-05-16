import React from 'react'
import {
    HashRouter as Router,
    Routes,
    Route,
} from 'react-router-dom'
import { RouteConfigVO } from '@/@types'
import RouteElement from '@/components/RouteElement'
import ErrorHtml from '@/components/ErrorBoundary/error'
import config from './config'

// 深度遍历路由配置
const deepLoopRoute = (routeConfig: RouteConfigVO[]) => (routeConfig.map(route => (
    <Route key={route.path} path={route.path} element={<RouteElement {...route} />} >
        {
            route.children && Array.isArray(route.children) && route.children.length
                ? deepLoopRoute(route.children) : <></>
        }
    </Route>
)))

export default function () {
    return <Router>
        <Routes>
            {
                // @ts-ignore
                deepLoopRoute(config)
            }
            <Route path="*" element={ErrorHtml} />
        </Routes>
    </Router>
}
