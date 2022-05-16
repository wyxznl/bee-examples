import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'babel-polyfill'
import Root from './pages'
import './common/assets/styles/index.less'
import 'antd/dist/antd.less';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
// TODO: StrictMode严格模式为其后代元素触发额外的检查和报告,在开发过程中组件会有多次调用问题，但仅在开发环境中运行，不会影响生产构建
// 可删除StrictMode
root.render(<StrictMode>
    <Root />
</StrictMode>);
