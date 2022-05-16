import { message } from 'antd';
import iframeBridge from './iframeBridge.js'

// 页面跳转通用方法
export const goPageClick = (buttonUrl: string) => {
    fetch(buttonUrl, {
        method: 'GET',
        mode: 'no-cors'
    }).then(function (res) {
        if (/(meituan)|(sankuai)|(dianping)|(dpurl)/.test(buttonUrl)) {
            iframeBridge.jumpTo({
                isMsg: true,
                href: buttonUrl
            })
            // jumpTo('/v2/shop/msgbox/wrap?redirect=' + encodeURIComponent(url))
        } else {
            window.open(buttonUrl, '_blank')
        }

    })
        .catch(e => {
            console.log('e', e)
            message.error('当前跳转链接无法访问')
        })
}