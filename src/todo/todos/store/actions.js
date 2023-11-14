import * as actions from './actionTypes'
export const addtodo = function (name) {
    return {
        type: actions.ADD_TODO,
        name: name
    }
}

export const removetodo = function (todoId) { 
    return {
        type: actions.REMOVE_TODO,
        id: todoId
    }
}

export const toggletodo = function (todoId) { 
    return {
        type: actions.TOGGLE_TODO,
        id: todoId
    }
}