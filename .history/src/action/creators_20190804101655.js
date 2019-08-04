
import {getListAction} from '../constant'

export const getTodoList = () => (dispatch)=>{
            const data = res.data
            const action = getListAction(data)
            dispatch(action)
        })   
}