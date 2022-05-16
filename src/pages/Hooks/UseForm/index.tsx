import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Input } from 'antd'
import { moduleTracker } from '@/common/util/lxReport'
import useForm from '@/common/hooks/useForm'
import './index.less'

export default function () {
    const [formData, setFormValue, resetFormValues] = useForm({ username: '', email: '' })
    const navigate = useNavigate()
    return (
        <form className="useForm_main">
            <div className="useForm-group">
                <label>用户名</label>
                <Input
                    className="form-control"
                    placeholder="用户名"
                    value={formData.username}
                    onChange={event => setFormValue('username', event.target.value)}
                >
                </Input>
            </div>
            <div className="useForm-group">
                <label>邮箱</label>
                <Input
                    className="form-control"
                    placeholder="邮箱"
                    value={formData.email}
                    onChange={event => setFormValue('email', event.target.value)}
                >
                </Input>
            </div>
            <Button type="primary"className="useForm_button" onClick={() => {
                // 跳转二级路由链接
                navigate(`/hooks/aresHooks?username=${formData.username}&email=${formData.email}`)
                // TODO: 点击触发埋点，修改b_id
                // moduleTracker('moduleClick', 'b_id')
            }}
            >提交</Button>
            <Button onClick={() => resetFormValues()}>重置</Button>
        </form>
    )
}
