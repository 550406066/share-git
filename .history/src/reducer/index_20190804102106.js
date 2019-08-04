
import { CHANGE_VALUE, ADDITEM, CHANGE_VALUE, GET_LIST } from '../constant'
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
        case ADDITEM:
            state.data.push(state.inputValue)
            return {
                ...state,
                inputValue: '',
            }
        case CHANGE_VALUE:
            return {
                ...state,
                data: state.data.filter((item, index) => index !== action.payload)
            }
        case GET_LIST:
            return {
                ...state,
                data: action.payload
            }
    }
    return state
}
