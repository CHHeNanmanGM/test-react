import * as ActionTypes from './actionTypes'

// 自增主键

export  function reducer (state, action) {
    const { type } = action
    console.log(action, '123')
    if (type === ActionTypes.toggleType) {
        state = {
            type: !state.type
            // filter: { ...state.filter, type: !state.filter.type },
            // todoList: state.todoList.filter(item => item.isComplete === state.filter.type)
        }
     }
    return {...state}
 }