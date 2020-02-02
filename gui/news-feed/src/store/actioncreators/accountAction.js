export const func = (id) => {
    return ((dispatch, getState) => {
        //async codes
        console.log(getState())
        dispatch({ type: 'DELETE_POST', id: id });
    });
};
