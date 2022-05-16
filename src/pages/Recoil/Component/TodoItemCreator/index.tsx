import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { Input, Button } from 'antd'
import { todoListState } from '@/common/recoil/atom'
import useChangeList from '../../Hooks/useChangeList'
import '@/pages/Recoil/index.less'

// 用于创建唯一 id 的工具函数
let id = 0
function getId () {
    return id++
}

const TodoItemCreator = () => {
    const [inputValue, setInputValue] = useState('' as string)
    const { dispatch } = useChangeList()
    const setTodoList = useSetRecoilState(todoListState)

    const addItem = () => {
    // setTodoList((oldTodoList) => [
    //     ...oldTodoList,
    //     {
    //         id: getId(),
    //         text: inputValue,
    //         isComplete: false,
    //     },
    // ]);
        dispatch({
            type: 'ADD',
            payload: {
                content: inputValue,
            },
        })
        setInputValue('')
    }

    const onChange = ({ target: { value } }: { target: { value: string } }) => {
        setInputValue(value)
    }

    return (
        <div className="recoil-add-todo">
            {/* <input type="text" value={inputValue} onChange={onChange} />
            <button onClick={addItem}>Add</button> */}
            <Input value={inputValue} onChange={onChange} />
            <Button type="primary" onClick={addItem}>Add</Button>
        </div>
    )
}

export default TodoItemCreator
