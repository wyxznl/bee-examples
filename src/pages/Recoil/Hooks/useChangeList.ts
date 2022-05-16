/* eslint-disable no-undef */
import { useSetRecoilState } from 'recoil'
import { todoListState } from '@/common/recoil/atom'

// 用于创建唯一 id 的工具函数
let id = 0
function getId () {
    return id++
}
const useChangeList = () => {
    const setTodoList = useSetRecoilState(todoListState)

    const dispatch = ({ type, payload }: { type: string, payload: {content: string} }) => {
        if (type === 'ADD') {
            setTodoList(oldTodoList => [
                ...oldTodoList,
                {
                    id: getId(),
                    text: payload.content,
                    isComplete: false,
                },
            ])
        }
    }

    return {
        dispatch,
    }
}

export default useChangeList
