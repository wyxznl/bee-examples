import React, { LazyExoticComponent, ReactElement } from 'react'
// route对象
export type RouteInfoVo = {
    path: string;
    component: LazyExoticComponent<React.ComponentType<any>>;
    routes?: RouteInfoVo[];
    fallback?: ReactElement
}
// router config对象
export type RouteConfigVO = {
    path: string
    component: LazyExoticComponent<() => ReactElement>
    children?: RouteConfigVO[]
}
// 代办项
export type todoObject = {
    id: number; // id
    isComplete: boolean; // 是否完成
    text: String; // 文本
}

export type ValueItem<T> = T extends Array<infer Item> ? Item : never
