import { createStore } from "redux";
import reducer from "./reducer";
const initStore = {
    todoList: [],
    filter: true
}

const store = createStore(reducer, initStore)

export default store