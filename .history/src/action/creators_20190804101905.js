
import { getListAction } from '../constant'
import { getList } from '../api'

export const getTodoList = () => (dispatch) => {
    getList().then((res) => {
        const action = getListAction( res.data)
        dispatch(action)
    })
}