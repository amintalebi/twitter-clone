export const signIn = (userName, password) => {
    return ((dispatch, getState) => {
        //async codes
        console.log(getState())
        dispatch({ type: 'SIGN_IN', myAccount: null });
        // or
        dispatch({ type: 'RESPONSE', response: null });
    });
};

export const signUp = (name, userName, email, password) => {
    return ((dispatch, getState) => {
        //async codes
        console.log(getState())
        dispatch({ type: 'RESPONSE', response: null });
    });
};

export const forgotPassword = (email) => {
    return ((dispatch, getState) => {
        //async codes
        console.log(getState())
        dispatch({ type: 'RESPONSE', response: null });
    });
};

export const editAccount = (account) => {
    return ((dispatch, getState) => {
        //async codes
        console.log(getState())
        dispatch({ type: 'RESPONSE', account: null });
    });
};

export const deleteAccount = () => {
    return ((dispatch, getState) => {
        //async codes
        console.log(getState())
        dispatch({ type: 'DELETE_ACCOUNT'});
    });
};

export const loadAccount = (id) => {
    return ((dispatch, getState) => {
        //async codes
        console.log(getState())
        dispatch({ type: 'LOAD_ACCOUNT', account: null });
    });
};


export const loadAccounts = (email) => {
    return ((dispatch, getState) => {
        //async codes
        console.log(getState())
        dispatch({ type: 'LOAD_ACCOUNTS', response: null });
    });
};


