import * as actions from './actionTypes'
export const addtodo = function (name) {
    return {
        type: actions.ADD_TODO,
        name: name
    }
}

export const removetodo = function (todoItem) { 
    return {
        type: actions.REMOVE_TODO,
        item: todoItem
    }
}

export const toggletodo = function (todoItem) { 
    return {
        type: actions.TOGGLE_TODO,
        item: todoItem
    }
}