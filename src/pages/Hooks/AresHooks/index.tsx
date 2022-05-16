import React from 'react'
import { useLocation } from 'react-router-dom'
import { useMount, useLocalStorageState } from 'ahooks'
import { message } from 'antd';
import 'url-search-params-polyfill'
import './index.less'

function useQuery () {
    return new URLSearchParams(useLocation().search)
}

export default function () {
    const query = useQuery()
    const username = query.get('username')
    const email = query.get('email')
    const [localName, setLocalName] = useLocalStorageState('username')

    useMount(() => {
        if (localName) {
            if (localName !== username) {
                setLocalName(username)
                message.info('LocalStorage中与当前用户名不同，已更新')
            } else {
                message.info('LocalStorage中与当前用户名相同，不修改')
            }
        } else {
            setLocalName(username)
            message.info('LocalStorage中不存在用户名，已写入')
        }
    })
    return (
        <div className="ares_main">
            <div>用户名： {username}</div>
            <div>邮箱：{email}</div>
        </div>
    )
}
