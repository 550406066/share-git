
import { combineReducers } from 'redux'
import { CHANGEVALUE, ADDITEM, DELETEITEM, GET_LIST } from '../constant'
const initState = {
    inputValue: '输入文字',
    data: [
        'Todo List 1',
        'Todo List 2',
        'Todo List 3',
    ]
}

export default (state = initState, action) => {
    switch (action.type) {
        case CHANGEVALUE:
            return {
                ...state,
                inputValue: action.payload
            }
        case ADDITEM:
            state.data.push(state.inputValue)
            return {
                ...state,
                inputValue: '',
            }
        case DELETEITEM:
            state.data.splice(action.payload, 1)
            return {
                ...state,
            }
        case GET_LIST:
            return {
                ...state,
                data: action.payload
            }
    }
    return state
}