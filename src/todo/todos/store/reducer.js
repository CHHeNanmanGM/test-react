import * as ActionTypes from './actionTypes'
const Status = {
    Complete: true,
    unComplete: false
}
// 自增主键
let increamentId = 0

export function reducer (state, action) {
    const { type } = action
    if (type === ActionTypes.ADD_TODO) {
        const item = {
            name: action.name,
            isComplete: Status.Complete,
            id: increamentId++
        }
        state = { ...state, todoList: [...state.todoList, item]}
    }
    return {...state}
    // if (type === ActionTypes.REMOVE_TODO) { 

    //  }
    // if (type === ActionTypes.TOGGLE_TODO) { }

 }