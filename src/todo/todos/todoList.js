import TodoItem from './todoItem';
import { connect } from 'react-redux'
import * as Actions from './store/actions'
import { Component } from 'react'

class TodoList extends Component { 
  constructor() { 
    super()
  }
  shouldComponentUpdate(newV, oldV) {
    console.log(newV, oldV)
    return true
   }

  render() { 
    return (
    <ul className="todo-list">
    {
        this.props.todos.map((item) => (
        <TodoItem
          key={item.id}
          text={item.name}
          completed={item.isComplete}
          onToggle={() =>this.props.onToggleTodo(item.id)}
          onRemove={() => this.props.onRemoveTodo(item.id)}
            />
      ))
    }
    </ul>
  )
  }

}


const selectVisibleTodos = (todos, filter) => {
  console.log(todos, filter)
  return todos.list.filter(item => item.isComplete === filter.type)
}

// const mapStateToProps = (state) => {
//   return {
//     todos: selectVisibleTodos(state.todos, state.filter)
//   };
// }

// const TodoList = ({ todos, onToggleTodo, onRemoveTodo }) => {
//     /**
//      * 注意学习JSX中循环的写法，是使用JS代码处理以及返回dom节点的方式
//      * 
//      */
//   return (
//     <ul className="todo-list">
//     {
//         todos.map((item) => (
//         <TodoItem
//           key={item.id}
//           text={item.name}
//           completed={item.isComplete}
//           onToggle={() => onToggleTodo(item.id)}
//           onRemove={() => onRemoveTodo(item.id)}
//             />
//       ))
//     }
//     </ul>
//   );
// };

// connect 的作用就是将Provider绑定的store与具体的组件联系在一起
const mapStateToProps = state => {
  return { todos: selectVisibleTodos(state.todos, state.filter)
 };
};

const mapDispatchToProps = {
  // ... 通常是一个充满 action creators 的 object
  // action Creators Object 他的每个属性将会被作为prop函数传入组件内，供组件内部调用
  onToggleTodo: Actions.toggletodo,
  onRemoveTodo: Actions.removetodo
}

// `connect` 返回一个接收要包装的组件的新函数：
/**
 * connet注意connect的写法，实际上是什么呢？可以这么理解，connect跟据传入的配置生成了
 * 一个组件，这个组件是一个方法，可以进行执行，执行的参数就是一个组件，而执行的结果是，将
 * 这个传入的组件包装了一层，并且给这个组件传入了需要的参数和函数方法。
 * connect类似于这样的实现，而connect还有一个好的实现，因为其实包装的这一层可以做很多的事情
 * 他做了一件优化的事情，就是当数据数据改变时，会首先对配置的store中的数据进行比对（shouldCompnentUpdate），
 * 如果比对的结果却是有变化，另外比较的方式是浅层比较类似于===，因为深度的比较有可能会造成无限的比对，并且深度很难把控
 * 所以浅层比较是默认的
 * 随后就会重新渲染组件，而如果没变化 就不会重新渲染，达到一种优化渲染的
 * 效果。但因为渲染时是浅层相等===，并且想达到效果其实就需要真的相等，那么怎样才能达到每次渲染真的相等
 * 的目的呢？首先一个问题就是避免渲染JSX中出现匿名函数 匿名对象，一位匿名的对象和匿名函数必然会在重新渲染时重新创建
 * 然后1再传入。必然与上一次生成的内容不想同，那么也就必然会导致重新渲染了。但是通常并非什么情况下都能轻松完成
 * 不使用匿名对象、匿名函数的，通常都会有组件实例自身独特的参数比如组件实例自身的id，这种情况下
 * 很难使用一个函数处理这个所有实例的问题，所以这种情况下必须要灵活使用了。方案就是将变量与操作
 * 内聚到组件之中，这样便无从对比，那么也就相同了这样也更加符合高内聚的特点。
 * 。
 */
const connectToStore = connect(mapStateToProps, mapDispatchToProps);

// 并且该函数返回连接的，包装的组件：
const ConnectedComponent = connectToStore(TodoList);

export default ConnectedComponent
