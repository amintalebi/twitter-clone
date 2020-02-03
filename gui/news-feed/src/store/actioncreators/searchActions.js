export const searchInAccountsAndChannels = (id) => {
    return ((dispatch, getState) => {
        //async codes
        console.log(getState())
        dispatch({ type: 'SEARCH_IN_ACCOUNTS_AND_CHANNELS', id: id });
    });
};

export const clearSearchInAccountsAndChannels = (id) => {
    return ((dispatch, getState) => {
        //async codes
        console.log(getState())
        dispatch({ type: 'CLEAR_SEARCH_IN_ACCOUNTS_AND_CHANNELS', id: id });
    });
};

export const searchInPosts = (id) => {
    return ((dispatch, getState) => {
        //async codes
        console.log(getState())
        dispatch({ type: 'SEARCH_IN_POSTS', id: id });
    });
};

export const clearSearchInPosts = (id) => {
    return ((dispatch, getState) => {
        //async codes
        console.log(getState())
        dispatch({ type: 'CLEAR_SEARCH_IN_ACCOUNTS_AND_CHANNELS', id: id });
    });
};
