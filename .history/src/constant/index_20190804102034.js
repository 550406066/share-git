export const CHANGE_VALUE = 'changeValue';
export const ADDITEM = 'addItem';
export const CHANGE_VALUE = 'CHANGE_VALUE';
export const GET_LIST = 'getList'
export const changValue = (value) => ({
    type: CHANGEVALUE,
    payload: value
})
export const addValue = () => ({
    type: ADDITEM,
})
export const CHANGE_VALUE = (index) => ({
    type: CHANGE_VALUE,
    payload: index
})
export const getListAction = (data) => ({
    type: GET_LIST,
    payload: data.data.list
})

