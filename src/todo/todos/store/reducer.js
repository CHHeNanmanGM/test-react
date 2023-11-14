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
    if (type === ActionTypes.TOGGLE_TODO) {
        const id = action.id
        const itemIndex = state.list.findIndex(item => item.id === id)
        const pre = state.list.slice(0, itemIndex)
        const old = state.list[itemIndex]
        const item = {...old, isComplete:  old.isComplete ? Status.unComplete : Status.Complete}
        const last = state.list.slice(itemIndex + 1)
        state = { ...state, list: [...pre,item, ...last ]}
    }
    if (type === ActionTypes.REMOVE_TODO) {
        const id = action.id
        const list = state.list.filter(item => item.id !== id)
        state = { ...state, list: list}
    }
    return {...state}
 }