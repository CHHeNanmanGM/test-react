import { Component } from 'react'
import store from './store/store'
import * as Actions from './store/actions'

/**当在执行构造函数时，会将组件传参作为构造函数的传参传入，
 * 并且初始化state，setState函数，state作为内部状态使用，
 * setState是响应式更新的函数，修改state的数据时，不能直接修改state的值，
 * 应该利用setState进行更新，setState会更新渲染内容，而直接修改state不会
*/

class Counter extends Component {
    // 第二个参数是顶层组件或上层组件注册的context，目前被用来添加供子组件使用的store
    constructor(props, context) {
        // props相当于传入参数
        // super(props)
        // 这种写法不用考虑构造函数多种传参的形式，而且context没有传入构造函数，那么将无法通过this.context访问context
        super(...arguments)
        // state相当于组件内部数据
        // 跟据props初始化state的值
        this.state = this.getOwnState()
        // 必须绑定执行上下文
        this.plus = this.plus.bind(this)
        this.minus = this.minus.bind(this)
        this.storeChange = this.storeChange.bind(this)
    }
    plus() {
        store.dispatch(Actions.increatement(this.props.name))
     }
    minus() {
        store.dispatch(Actions.decreatement(this.props.name))
    }
    
    getOwnState() {
        return {
           count : store.getState()[this.props.name]
        }
    }
    storeChange() {
        console.log('change', store.getState())
        this.setState(this.getOwnState())
    }

    componentDidMount() { 
        store.subscribe(this.storeChange)
    }
    // componentWillUnmount() { 
    //     store.unsubscribe()
    // }
    /**
     * 热更新 看起来像是当组件传参变更时，就会执行render函数，
     * 重新渲染组件，但并不会重新走创建类的构造函数
    */ 
    render() { 
        const { label } = this.props
        // render函数只允许单元素
        return (<div>
            <button onClick={this.plus}>+</button>
            <button onClick={this.minus}>-</button>
            <span>{label}:</span>{ this.state.count }
        </div>)
    }
    // shouldComponentUpdate(nextProps, nextstate) {
    //     console.log(nextProps.label, this.props.label)
    //     return true
    //  }

}
// defaultProps属性配置组件实例的默认值 可以猜测如果加了TS，那么可能会有具体的类型提
export default Counter