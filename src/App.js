import './App.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import TodoApp from './todo';

function App() { 
  return (
    ReactDOM.render(
      /**在Provider传入store，通过 */
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('root')
)
  )
}
export default App