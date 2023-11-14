import React from 'react'

/**
 * 以函数为子组件
 */

class CutDown extends React.Component { 
    constructor() {
        super(...arguments)
        this.state = {
            count: this.props.startCount
        }
    }
    render() { 
        return this.props.children(this.state.count)
    }
    // 组件挂载结束就启动一个定时器，更新state触发渲染
    componentDidMount() { 
        this.interval = setInterval(() => { 
            this.setState({ count: this.state.count - 1 })
            if (this.state.count === 0) { 
                window.clearInterval(this.interval)
            }
        }, 1000)
    }
    componentWillUnmount() {
        if (this.interval) { 
            window.clearInterval(this.interval)
        }
    }

}

export default CutDown