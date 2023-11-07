import TodoItem from './todoItem';
import { connect } from 'react-redux'
import * as Actions from './store/actions'

const TodoList = ({ todos, onToggleTodo, onRemoveTodo }) => {
    /**
     * 注意学习JSX中循环的写法，是使用JS代码处理以及返回dom节点的方式
     * 
     */
  return (
    <ul className="todo-list">
    {
      todos.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          completed={item.completed}
          onToggle={() => onToggleTodo(item.id)}
          onRemove={() => onRemoveTodo(item.id)}
        />
      ))
    }
    </ul>
  );
};

// connect 的作用就是将Provider绑定的store与具体的组件联系在一起
const mapStateToProps = state => {
  console.log(state)
  return { todos: state.todos.list };
};

const mapDispatchToProps = {
  // ... 通常是一个充满 action creators 的 object
  // action Creators Object 他的每个属性将会被作为prop函数传入组件内，供组件内部调用
  onToggleTodo: Actions.toggletodo,
  onRemoveTodo: Actions.removetodo
}

// `connect` 返回一个接收要包装的组件的新函数：
const connectToStore = connect(mapStateToProps, mapDispatchToProps);

// 并且该函数返回连接的，包装的组件：
const ConnectedComponent = connectToStore(TodoList);

export default ConnectedComponent
