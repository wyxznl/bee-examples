import { atom } from 'recoil'
import { todoObject } from '@/@types'

const todoListState = atom({
    key: 'todoListState',
    default: [] as todoObject[],
})
const todoListFilterState = atom({
    key: 'todoListFilterState',
    default: 'SHOW_ALL',
})

export {
    todoListState,
    todoListFilterState,
}
