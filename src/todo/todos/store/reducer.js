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
        state = { ...state, list: [...state.list, item]}
    }
    return {...state}
 }