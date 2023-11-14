import './App.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import TodoApp from './todo';
import CutDown from './component/CutDown';

function App() { 
  fetch(`http://www.weather.com.cn/data/cityinfo/101010100.html`)
  return (
    ReactDOM.render(
      /**在Provider传入store，通过 */
  <Provider store={store}>
        <TodoApp />
        <CutDown startCount={ 10 }>
          {(count) => <div>{ count ?  count : '结束啦' }</div>}
        </CutDown>
  </Provider>,
  document.getElementById('root')
)
  )
}
export default App