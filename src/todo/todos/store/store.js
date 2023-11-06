import { createStore } from "redux";
import reducer from "./reducer";
const initStore = {
    todoList: [],
    filter: 'ALL'
}

const store = createStore(reducer, initStore)

export default store