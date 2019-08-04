
import { getListAction } from '../constant'
import { getList } from '../api'

export const getTodoList = () => (dispatch) => {
    getList().then((res) => {
        const data = res.data
        const action = getListAction(data)
        dispatch(action)
    })
}