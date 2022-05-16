import * as React from 'react'
import { Link } from 'react-router-dom'
import './index.less'

export default () => (
    <div className="home-page">
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/recoil">recoil</Link>
            </li>
            <li>
                <Link to="/hooks/useForm">hooks</Link>
            </li>
        </ul>
    </div>
)
