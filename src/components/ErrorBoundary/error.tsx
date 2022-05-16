import React from 'react'
import { Button } from 'antd'
import iframeBridge from '@/common/util/iframeBridge'
import buggerIcon from '@/common/assets/images/bugger_icon.png'
import './error.less'

const returnBack = () => {
    const { origin } = window.location
    iframeBridge.jumpTo({
        isMsg: true,
        href: `${origin}/#/page/index`,
    })
}
export default (
    <div className="error-main">
        <img src={buggerIcon} />
        <span className="error-main-text">当前页面出错啦～</span>
        <Button onClick={() => returnBack()}>返回首页</Button>
    </div>
)
