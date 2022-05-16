import React from 'react'
import { useRecoilValue } from 'recoil'
import { filteredTodoListState } from '@/common/recoil/selector'
import TodoItemCreator from './Component/TodoItemCreator'
import TodoItem from './Component/TodoItem'
import TodoListFilters from './Component/TodoListFilters'
import TodoListStats from './Component/TodoListStats'
import '@/pages/Recoil/index.less'

export default function () {
    const todoList = useRecoilValue(filteredTodoListState)
    return (
        <div className="recoil-main">
            {/* <TodoListStats /> */}
            <TodoListFilters />
            <TodoItemCreator />

            {todoList.map(todoItem => (
                <TodoItem key={todoItem.id} item={todoItem} />
            ))}
        </div>
    )
}
