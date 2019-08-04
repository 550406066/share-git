
import { CHANGE_VALUE, ADD_ITEM, DELETE_ITEM, GET_LIST } from '../constant'
import { getList } from '../api'

export const getTodoList = () => (dispatch) => {
    getList().then((res) => {
        const action = getListAction(res.data)
        dispatch(action)
    })
}
export const changValue = (value) => ({
    type: CHANGE_VALUE,
    payload: value
})
export const addValue = () => ({
    type: ADD_ITEM,
})
export const deleteItem = (index) => ({
    type: DELETE_ITEM,
    payload: index
})
const getListAction = (data) => ({
    type: GET_LIST,
    payload: data.data.list
})
