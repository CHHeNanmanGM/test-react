import React from 'react';
import AddTodo from './addTodo.js';
import TodoList from './todoList.js';

export default () => {
    return (
    //   JSX中添加类名不使用class 因为class是关键字 应当使用className
    <div className="todos">
      <AddTodo />
      <TodoList />
    </div>
  );
}
