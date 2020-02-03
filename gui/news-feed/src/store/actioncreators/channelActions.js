export const addAdmin = (channelID, userID) => {
    return ((dispatch, getState) => {
        //async codes
        console.log(getState())
        dispatch({ type: 'ADD_ADMIN', channel: null });
    });
};

export const deleteAdmin = (channelID, userID) => {
    return ((dispatch, getState) => {
        //async codes
        console.log(getState())
        dispatch({ type: 'DELETE_ADMIN', channel: null });
    });
};

export const editChannel = (channelID, details) => {
    return ((dispatch, getState) => {
        //async codes
        console.log(getState())
        dispatch({ type: 'EDIT_CHANNEL', channel: null });
    });
};

export const createChannel = () => {
    return ((dispatch, getState) => {
        //async codes
        console.log(getState())
        dispatch({ type: 'CREATE_ACCOUNT'});
    });
};

export const deleteChannel = () => {
    return ((dispatch, getState) => {
        //async codes
        console.log(getState())
        dispatch({ type: 'DELETE_ACCOUNT'});
    });
};

export const loadMyChannels = () => {
    return ((dispatch, getState) => {
        //async codes
        console.log(getState())
        dispatch({ type: 'LOAD_MY_CHANNELS', channel: null });
    });
};

export const loadChannel = (channelID) => {
    return ((dispatch, getState) => {
        //async codes
        console.log(getState())
        dispatch({ type: 'LOAD_CHANNEL', channel: null });
    });
};

export const loadUserChannels = (userID) => {
    return ((dispatch, getState) => {
        //async codes
        console.log(getState())
        dispatch({ type: 'LOAD_CHANNELS', channel: null });
    });
};

