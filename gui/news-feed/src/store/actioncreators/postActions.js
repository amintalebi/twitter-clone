export const deletePost = (id) => {
    return ((dispatch, getState) => {
        //async codes
        console.log(getState())
        dispatch({ type: 'DELETE_POST', id: id });
    });
};

export const createPost = (post) => {
    return ((dispatch, getState) => {
        //async codes
        console.log(getState())
        dispatch({ type: 'ADD_POST', post: post });
    });
};

export const updatePost = (post) => {
    return ((dispatch, getState) => {
        //async codes
        console.log(getState())
        dispatch({ type: 'UPDATE_POST', post: post });
    });
};

export const likePost = (id) => {
    return ((dispatch, getState) => {
        //async codes
        console.log(getState())
        dispatch({ type: 'LIKE_POST', id: id });
    });
};

export const loadPost = () => {
    return ((dispatch, getState) => {
        //async codes
        console.log(getState())
        dispatch({ type: 'LOAD_POST', post: null});
    });
};

export const loadPosts = () => {
    return ((dispatch, getState) => {
        //async codes
        console.log(getState())
        dispatch({ type: 'LOAD_POSTS', posts: null});
    });
};
