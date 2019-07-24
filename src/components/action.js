export const ADD_TODO = "ADD_TODO";
export const DEL_TODO = "DEL_TODO";
export const FINISH_TODO = "FINISH_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const EDIT_TODO = "EDIT_TODO";



export const addAction = (payload) => ({
    type: ADD_TODO,
    payload
})

export const editAction = (payload) => ({
    type: EDIT_TODO,
    payload
})

export const delAction = (payload) => ({
    type: DEL_TODO,
    payload
})
export const FinishAction = (payload) => ({
    type: FINISH_TODO,
    payload
})
export const updateAction = (payload) => ({
    type: UPDATE_TODO,
    payload
})

