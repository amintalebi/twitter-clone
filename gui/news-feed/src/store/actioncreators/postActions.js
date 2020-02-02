export const deleteMyPost = (id) => {
    return ((dispatch, getState) => {
        //async codes
        console.log(getState())
        dispatch({ type: 'DELETE_POST', id: id });
    });
};

// export const addPost = (post) => {
//     return ((dispatch, getState) => {
//         //async codes
//         console.log(getState())
//         dispatch({ type: 'DELETE_POST', id: id });
//     });
// };
