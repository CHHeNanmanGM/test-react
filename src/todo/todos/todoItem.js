import { Component } from "react"
import { connect } from "react-redux"

// const TodoItem = ({onToggle, onRemove, completed, text}) => (
//   <li
//     className="todo-item"
//     style={{
//       textDecoration: completed ? 'line-through' : 'none'
//     }}
//   >
//     <span onClick={onToggle} style={{ marginRight: '10px' }}>toggle</span>
//     <span className="text">{text}</span>
//     <button className="remove" onClick={onRemove}>删 除</button>
//   </li>
// )

class TodoItem extends Component { 
  constructor(props) { 
    super(props)
  }

  componentDidUpdate() { 
    console.log(this.props.text)
  }
  shouldComponentUpdate(nextProps,) {
    /**
     *  除了使用connect的方法，并且控制变量，进而使react意识到变量没有变化这种方式
     * 控制组件不进行刷新。另外一种方法就是通过shouldUpdateComponent 返回ture或
     * false，控制此次数据变更是否需要重新渲染组件，true则渲染false则不渲染。
     * 是非常实用的一个方法。
     */

      return (nextProps.completed !== this.props.completed) ||
    (nextProps.text !== this.props.text);
    // return true
  }

  render() { 
    return (<li
    className="todo-item"
    style={{
      textDecoration: this.props.completed ? 'line-through' : 'none'
    }}
  >
    <span onClick={this.props.onToggle} style={{ marginRight: '10px' }}>toggle</span>
    <span className="text">{this.props.text}</span>
    <button className="remove" onClick={this.props.onRemove}>删 除</button>
  </li>)
  }
}

export default connect()(TodoItem)