import React from 'react'
import { RecoilRoot } from 'recoil'
import Router from '@/common/router'


export default function () {
    // @ts-ignore
    return <RecoilRoot>
        <Router/>
    </RecoilRoot>
}
