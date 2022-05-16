/* eslint-disable no-undef */
// eslint-disable-next-line import/no-unresolved
import Cookies from 'js-cookie'
import { ValueItem } from '@/@types'

// TODO:大部分商家端灵犀埋点都需要门店ID与用户ID，这里进行预设，不需要可删除
const poi_id = Cookies.get('wmPoiId') || -1
const acct_Id = Cookies.get('acctId') || -1

// 模块类型
const LxType = {
    PAGE_VIEW: 'pageView',
    MODULE_VIEW: 'moduleView',
    MODULE_CLICK: 'moduleClick'
} as const
// 模块类型定义
const lxTypeVo = Object.values(LxType)
type LxTypeVo = ValueItem<typeof lxTypeVo>
// 初始化：
// @ts-ignore
const tracker = LXAnalytics('getTracker', 'shangou_online_e')
const pageTracker = (valCid: any, valLab = {}) => tracker(LxType.PAGE_VIEW, { ...valLab, poi_id, acct_Id }, null, valCid)
const moduleTracker = ({
    eventType, valCid, valBid, valLab = {}
}: {
    eventType: LxTypeVo, valCid: string, valBid: string, valLab?: any
}) => pageTracker({ cid: valCid }, {})(eventType, valBid, { ...valLab, poi_id, acct_Id })
export {
    LxType,
    tracker,
    pageTracker,
    moduleTracker
}
