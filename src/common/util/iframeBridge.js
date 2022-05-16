/**
 * 客户端接口封装
 * @author XU Kai(xukai@meituan.com)
 * @date 2016-03-09 星期三
 */
/* eslint-disable */
/* global parent */
/* eslint no-restricted-globals: ["warn", "parent"] */

// @see http://wiki.sankuai.com/pages/viewpage.action?pageId=410015853

const bridge = {};
let platformShareData = null;
// 全局tips提示
bridge.inform = function (...rest) {
    postMessageToParent('inform', rest);
};

// 弹出框
bridge.dialog = function (...rest) {
    postMessageToParent('dialog', rest);
};

// 父页面跳转
bridge.jumpTo = function (...rest) {
    postMessageToParent('jumpTo', rest);
};

// 收起侧边栏
bridge.pickupSlidebar = function (...rest) {
    postMessageToParent('pickupSlidebar', ...rest);
};

// 选择指定门店
bridge.selectWmPoi = function (...rest) {
    postMessageToParent('selectWmPoi', rest);
};

// 获取平台共享数据
bridge.getPlatformShareData = function () {
    return platformShareData;
};

// 弹出合同签署页面
bridge.signContract = function () {
    postMessageToParent('signContract', arguments)
};

// 和壳子im通信
bridge.postImMsg = function (obj) {
    postMessageToParent('im', obj)
};

function postMessageToParent(method, args) {
    let message;
    if (method === 'im') {
        message = args;
    } else {
        message = JSON.stringify({
        method,
        args: Array.prototype.slice.call(args || []),
        });
    }
    // console.log(message)
    // parent.postMessage(message, '*');
    top.postMessage(message, '*');
}

// ---- 从服务端接收push消息
const logoutMessageDefaultHanlder = function () {
    // 删除掉认证相关cookie
    delCookie('token');
    delCookie('acctId');
    delCookie('wmPoiId');
    delCookie('_source');
};
const dataDefaultHanlder = function (data) {
    window.CommConstants = data;
};

const changeDomShowHandler = function (data) {
    const {
        selector
    } = data;
    let jQdom = null;
    if (selector) jQdom = document.querySelectorAll(selector);
    if (jQdom.length > 0 && data.content != null) {
        jQdom.forEach(dom => {
        dom.innerText = data.content
        });
    }
};

const messageHandlers = {
    push: [], // web socket的push消息
    logout: [logoutMessageDefaultHanlder], // 退出
    platformShareData: [dataDefaultHanlder],
    changeDomShow: [changeDomShowHandler],
};

bridge.addMessageHandler = function (messageType, handler) {
    messageHandlers[messageType].push(handler);
};

bridge.removeMessageHandler = function (messageType, handler) {
    const handlers = messageHandlers[messageType];
    if (handlers && handlers.length > 0) {
        for (let i = 0; i < handlers.length; i++) {
        if (handler === handlers[i]) {
            handlers.splice(i, 1);
            break;
        }
        }
    }
};

window.addEventListener('message', (event) => {
    let messageData;
    try {
        messageData = JSON.parse(event.data);
        const handlers = messageHandlers[messageData.type];
        if (handlers && handlers.length > 0) {
        for (let i = 0; i < handlers.length; i++) {
            const result = handlers[i].call(null, messageData.data);
            // 返回值为false则不继续往下执行
            if (result === false) {
            break;
            }
        }
        }
    } catch (e) {
        // console.log(e);
    }
});

function delCookie(name) {
    const exp = new Date();
    exp.setTime(exp.getTime() - 1);
    document.cookie = `${name}=; path=/; expires=${exp.toUTCString()}`;
}

// -- 初始化
// 获取平台共享数据
postMessageToParent('getPlatformShareData');

export default bridge;
