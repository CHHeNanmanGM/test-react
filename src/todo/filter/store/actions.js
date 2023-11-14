import * as actions from './actionTypes'
export const toggleType = function (type) {
    console.log('actionsexcute')
    return {
        type: actions.toggleType
    }
}