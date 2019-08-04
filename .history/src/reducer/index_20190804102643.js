
import { CHANGE_VALUE, ADD_ITEM, DELETE_ITEM, GET_LIST } from '../constant'
const initState = {
    inputValue: '输入文字',
    data: [
    ]
}

export default (state = initState, action) => {
    switch (action.type) {
        case CHANGE_VALUE:
            return {
                ...state,
                inputValue: action.payload
            }
        case ADD_ITEM:
            state.data.push(state.inputValue)
            return {
                ...state,
                inputValue: '',
            }
        case DELETE_ITEM:
            return {
                ...state,
                data: state.data.filter((item, index) => index !== action.payload)
            }
        case GET_LIST:
            return {
                ...state,
                data: action.payload
            }
            default:
                return {
                    ...state
                }
    }
    return state
}
