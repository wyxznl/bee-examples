import PropTypes from 'prop-types'
import React from 'react'

class ErrorBoundary extends React.Component {
    state = {
        hasError: false,
        error: null,
    }

    // 从错误中映射状态对象
    static getDerivedStateFromError (error) {
        return {
            hasError: true,
            error,
        }
    }

    render () {
        if (this.state.hasError) {
            return this.props.fallback
        }
        return this.props.children
    }
}
ErrorBoundary.propTypes = {
    fallback: PropTypes.node,
    children: PropTypes.element,
}
export default ErrorBoundary
