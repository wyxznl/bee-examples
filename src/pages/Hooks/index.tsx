import React from 'react'
import { Outlet } from 'react-router-dom'
import { useMount } from 'ahooks'
import { pageTracker } from '@/common/util/lxReport'

export default function () {
    useMount(() => {
        // TODO: 页面PV埋点使用
        // pageTracker({ cid: 'cid' })
    })
    return (
        <>
            <div style={{ textAlign: 'center', marginTop: '100px' }}>这里是HOOKS页面</div>
            <Outlet />
        </>
    )
}
