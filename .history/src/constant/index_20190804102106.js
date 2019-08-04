export const CHANGE_VALUE = 'CHANGE_VALUE';
export const ADDITEM = 'addItem';
export const DELETEITEM = 'deleteItem';
export const GET_LIST = 'getList'
export const changValue = (value) => ({
    type: CHANGE_VALUE,
    payload: value
})
export const addValue = () => ({
    type: ADDITEM,
})
export const deleteItem = (index) => ({
    type: DELETEITEM,
    payload: index
})
export const getListAction = (data) => ({
    type: GET_LIST,
    payload: data.data.list
})

