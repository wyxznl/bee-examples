import axios from 'axios'

import { addGetParams, addPostParams, injectFormDataFormat, codeCheck } from './interceptors'

// 定义接口
export const api = { }

export const commonGetApi = axios.create()
commonGetApi.interceptors.request.use(addGetParams) // TODO:添加一些固有参数，不需要可删除
commonGetApi.interceptors.response.use(codeCheck)


export const commonPostApi = axios.create({
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})
// request后面先执行
commonPostApi.interceptors.request.use(injectFormDataFormat) // TODO:form-data请求
commonPostApi.interceptors.request.use(addPostParams) // TODO:添加一些固有参数，不需要可删除
// response前面先执行
commonPostApi.interceptors.response.use(codeCheck)
