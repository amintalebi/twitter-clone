export const deletePost = (id) => {
    return ((dispatch, getState) => {
        //async codes
        dispatch({ type: 'DELETE_POST', id: id });
    });
};
