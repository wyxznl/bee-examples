/* eslint-disable react/prop-types */
import React from 'react'
import { useRecoilState } from 'recoil'
import { Checkbox } from 'antd'
import { todoObject } from '@/@types'
import { todoListState } from '@/common/recoil/atom'
import '@/pages/Recoil/index.less'

const TodoItem = ({ item }: { item: todoObject}) => {
    const [todoList, setTodoList] = useRecoilState(todoListState)
    const index = todoList.findIndex(listItem => listItem.id === item.id)

    const editItemText = ({ target: { value } }: { target: { value: string } }) => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            text: value,
        })

        setTodoList(newList)
    }

    const toggleItemCompletion = () => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            isComplete: !item.isComplete,
        })

        setTodoList(newList)
    }

    const deleteItem = () => {
        const newList = removeItemAtIndex(todoList, index)

        setTodoList(newList)
    }

    return (
        <div className="recoil-todo-item">
            {/* <input type="text" value={item.text} onChange={editItemText} /> */}
            {/* <input
                type="checkbox"
                checked={item.isComplete}
                onChange={toggleItemCompletion}
            />
            <span>{item.text}</span>
            <button onClick={deleteItem}>X</button> */}
            <Checkbox
                checked={item.isComplete}
                onChange={toggleItemCompletion}
            ></Checkbox>
            <span>{item.text}</span>
        </div>
    )
}

const replaceItemAtIndex = (arr: todoObject[], index: number, newValue: todoObject) => [...arr.slice(0, index), newValue, ...arr.slice(index + 1)]

const removeItemAtIndex = (arr: todoObject[], index: number) => [...arr.slice(0, index), ...arr.slice(index + 1)]

export default TodoItem
