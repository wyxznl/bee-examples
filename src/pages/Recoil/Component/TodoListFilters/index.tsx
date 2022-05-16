import React from 'react'
import { useRecoilState } from 'recoil'
import { Select } from 'antd'
import { todoListFilterState } from '@/common/recoil/atom'
import '@/pages/Recoil/index.less'

const TodoListFilters = () => {
    const [filter, setFilter] = useRecoilState(todoListFilterState)
    const options = [
        { value: 'SHOW_ALL', label: '选择全部' },
        { value: 'SHOW_COMPLETED', label: '选择已完成' },
        { value: 'SHOW_UNCOMPLETED', label: '选择未完成' },
    ]

    const updateFilter = ({ target: { value } }: { target: { value: string } }) => {
        setFilter(value)
    }

    return (
        <>
            {/* Filter:
            <select value={filter} onChange={updateFilter}>
                <option value="Show All">All</option>
                <option value="Show Completed">Completed</option>
                <option value="Show Uncompleted">Uncompleted</option>
            </select> */}
            <Select
                className="recoil-filter"
                options={options}
                value={filter}
                onChange={value => setFilter(value)}
            />
        </>
    )
}

export default TodoListFilters
