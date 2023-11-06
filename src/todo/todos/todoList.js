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