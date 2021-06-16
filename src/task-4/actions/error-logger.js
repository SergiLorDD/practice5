export const DELETE_ERROR = 'DELETE_ERROR';

export const deleteError = (id) => ({
    type: DELETE_ERROR,
    payload: id
})