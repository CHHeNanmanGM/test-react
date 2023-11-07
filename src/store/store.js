import {createStore, combineReducers} from 'redux';

import { reducer as todoReducer } from '../todo/todos/store/reducer';
import { reducer as filterReducer } from '../todo/filter/store/reducer';

const initStore = {
  todos: {
    list: []
  },
  filter: {
    type: 'ALL'
  }
}

/**
 * combineReducers会重新返回一个reducer,当dipatch时，
 * 这个action会触发组合的reducer,并且将两个reducer对应的key在store树
 * 上映射的key数据传入reducer,这样就将两个reducer分开来处理了，当执行过
 * 对应的action之后，会将返回的store在组合然后再合并到store树上去
 */
// 
const reducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer
});

export default createStore(reducer, initStore);