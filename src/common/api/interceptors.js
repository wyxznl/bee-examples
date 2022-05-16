import qs from 'qs'
import Cookies from 'js-cookie'
import { message } from 'antd';

// 添加固有参数
export function addGetParams (config) {
    const wmPoiId = Cookies.get('wmPoiId') || -1
    const acctId = Cookies.get('acctId') || -1
    const { params } = config
    return { ...config, params: { wmPoiId, acctId, ...params } }
}

// 添加固有参数
export function addPostParams (config) {
    const wmPoiId = Cookies.get('wmPoiId') || -1
    const acctId = Cookies.get('acctId') || -1
    const { data } = config
    return { ...config, data: { wmPoiId, acctId, ...data } }
}


export function injectFormDataFormat (config) {
    const { data } = config
    return { ...config, data: qs.stringify(data) }
}

// export function qsFormat (config) {
//     const { params } = config
//     return { ...config, params: qs.stringify(params) }
// }

export function codeCheck (response) {
    const { data } = response
    const { code, msg } = data
    if (code !== 0) {
        message.error(msg ? msg : '当前系统繁忙，请您稍后再试')
        throw new Error('')
    }
    return data
}
