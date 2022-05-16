import React, { Suspense } from 'react'
import { RouteInfoVo } from '@/@types'
import ErrorBoundary from '@/components/ErrorBoundary'
import ErrorHtml from '@/components/ErrorBoundary/error'
import LoadingHtml from '@/components/IconLoading'

export default function (route: RouteInfoVo) {
    const {
        component: Component, fallback = LoadingHtml, path, routes, ...otherRoute
    } = route || {}
    return <ErrorBoundary fallback={ErrorHtml}>
        <Suspense fallback={fallback}>
            <Component {...otherRoute} routes={routes} />
        </Suspense>
    </ErrorBoundary>
}
